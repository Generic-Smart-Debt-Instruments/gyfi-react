import { useEffect, useState } from "react";

import Button from "./Button.js";
import React from "react";
import {useEthers} from "@usedapp/core";
import {BLOCK_EXPLORERS, CHAIN_CURRENCIES} from "../../constants";
import {addChainToMetaMask} from "../../lib/metamask.js";
import {useSaleContractState} from "../../hooks/useSaleContractState.js";
import {useCountdown} from "../../hooks/useCountdown.js";

import {weiToFixed} from "../../lib/bndisplay";

/*TODO: 
- Fetch time end, time start, rate, cap, and user cap from contract
- When click network button, switch to network
*/
const SaleCard = ({sale}) => {
  const { chainId } = useEthers();
  const saleContractState = useSaleContractState(sale.chainId, sale.address);

  const [isOnChain, setIsOnChain] = useState(chainId === sale.chainId);
  useEffect(()=>{
    setIsOnChain(!!chainId && sale.chainId === chainId.toString());
  },[chainId,sale.chainId])

  const blockExplorerUrl = BLOCK_EXPLORERS[sale.chainId];
  const currency = CHAIN_CURRENCIES[sale.chainId];

  const startCountdown = useCountdown(saleContractState ? saleContractState.openingTime : 0, "Sale Started.");
  const endCountdown = useCountdown(saleContractState ? saleContractState.closingTime : 0, "Sale Finished.");

  if(!saleContractState) return(<p>Loading from {sale.network}: {sale.name}</p>)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{sale.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Network:</td>
            <td>
              {sale.network}
              { isOnChain ? (<>
                ✔
              </>) : (<>
                ❌{(sale.chainId !== "1" && sale.chainId !== "3" && sale.chainId !== "4" && sale.chainId !== "42" && sale.chainId !== "420" ) &&
                  <Button onClick={()=>addChainToMetaMask(sale.chainId)}>{"<->"}</Button>
                }
              </>)
              }
            </td>
          </tr>
          <tr>
            <td>Start Countdown</td>
            <td>{startCountdown}</td>
          </tr>
          <tr>
            <td>End Countdown</td>
            <td>{endCountdown}</td>
          </tr>
          <tr>
            <td>Cap</td>
            <td>
              {weiToFixed(saleContractState.cap,2)} {currency}
            </td>
          </tr>
          <tr>
            <td>User Cap:</td>
            <td>
              {weiToFixed(saleContractState.perBeneficiaryCap,2)} {currency}
            </td>
          </tr>
          <tr>
            <td>GYFI available:</td>
            <td>{weiToFixed(saleContractState.rate.mul(saleContractState.cap).sub(saleContractState.weiRaised),0)} GYFI</td>
          </tr>
          <tr>
            <td>Rate:</td>
            <td>
              {saleContractState.rate.toString()} GYFI/{currency}
            </td>
          </tr>
          <tr>
            <td>Contract Address:</td>
            <td>
              <a href={`${blockExplorerUrl}/address/${sale.address}`}>{sale.address}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SaleCard;
