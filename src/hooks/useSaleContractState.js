import { useEffect, useState } from "react";
import {useEthers} from "@usedapp/core";
import {RPC_URLS} from "../constants";
import { createWatcher } from '@makerdao/multicall';
import { MULTICALL_ADDRESSES } from "@usedapp/core";

export function useSaleContractState(chainId, saleContractAddress) {
    const { account } = useEthers()
    const [saleContractState, setSaleContractState] = useState(null);

    useEffect(()=>{
        if(!chainId || !saleContractAddress) return;
        let watcher;
        let calls = [
            {
                target: saleContractAddress,
                call: ['cap()(uint256)'],
                returns: [['cap', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['capReached()(bool)'],
                returns: [['capReached', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['openingTime()(uint256)'],
                returns: [['openingTime', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['closingTime()(uint256)'],
                returns: [['closingTime', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['isOpen()(bool)'],
                returns: [['isOpen', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['hasClosed()(bool)'],
                returns: [['hasClosed', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['rate()(uint256)'],
                returns: [['rate', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['weiRaised()(uint256)'],
                returns: [['weiRaised', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['perBeneficiaryCap()(uint256)'],
                returns: [['perBeneficiaryCap', (val)=>val]]
            }
        ];
        if(!!account) {
            calls.concat([
                ...calls,
                {
                    target: saleContractAddress,
                    call: ['isWhitelisted(address)(bool)',account],
                    returns: [['isWhitelisted', (val)=>val]]
                },
                {
                    target: saleContractAddress,
                    call: ['contribution(address)(uint256)',account],
                    returns: [['contribution', (val)=>val]]
                }
            ])
        }
        watcher = createWatcher(calls,
            {
                rpcUrl:RPC_URLS[chainId],
                multicallAddress:MULTICALL_ADDRESSES[chainId]
            }
        );
        watcher.batch().subscribe(updates=>{
            let newState = {}
            updates.forEach(update => {
                newState[update.type] = update.value
            });
            setSaleContractState(
                newState
            );
        });
        watcher.start();
        
        (async () => {
            await watcher.awaitInitialFetch();
            watcher.stop();
        })();
    },[chainId, saleContractAddress, account]);

    return saleContractState;
}