import { useEffect, useState } from "react";
import {useEthers} from "@usedapp/core";
import {RPC_URLS, MUTICALL_ADDRESSES} from "../constants";
import { createWatcher } from '@makerdao/multicall';
import { MULTICALL_ADDRESSES } from "@usedapp/core";

export function useSaleContractState(chainId, saleContractAddress) {
    const { account } = useEthers()
    const [saleContractState, setSaleContractState] = useState({
        cap:null,
        capReached:null,
        openingTime:null,
        closingTime:null,
        isOpen:null,
        hasClosed:null,
        rate:null,
        weiRaised:null,
        isWhitelisteed:null,
        contribution:null
    });

    useEffect(()=>{
        console.log("Sale contract state effect")
        console.log(saleContractState)
    },[saleContractState])

    useEffect(()=>{
        if(!chainId || !saleContractAddress) return;
        console.log("Updating")
        let watcher;
        let calls = [
            {
                target: saleContractAddress,
                call: ['cap()(uint256)'],
                returns: [['cap', (val)=>val]]
            }/*,
            {
                target: saleContractAddress,
                call: ['capReached()'],
                returns: [['capReached', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['openingTime()'],
                returns: [['openingTime', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['closingTime()'],
                returns: [['closingTime', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['isOpen()'],
                returns: [['isOpen', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['hasClosed()'],
                returns: [['hasClosed', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['rate()'],
                returns: [['rate', (val)=>val]]
            },
            {
                target: saleContractAddress,
                call: ['weiRaised()'],
                returns: [['weiRaised', (val)=>val]]
            }*/
        ];
        /*if(!!account) {
            calls.concat([
                ...calls,
                {
                    target: saleContractAddress,
                    call: ['isWhitelisted(address)',account],
                    returns: [['isWhitelisted', (val)=>val]]
                },
                {
                    target: saleContractAddress,
                    call: ['contribution(address)',account],
                    returns: [['contribution', (val)=>val]]
                }
            ])
        }*/
        watcher = createWatcher(calls,
            {
                rpcUrl:RPC_URLS[chainId],
                multicallAddress:MULTICALL_ADDRESSES[chainId]
            }
        );
        watcher.batch().subscribe(updates=>{
            console.log("Update fetched")
            let newState = {...saleContractState}
            updates.forEach(update => {
                newState[update.type] = update.value
            });
            console.log(newState)
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