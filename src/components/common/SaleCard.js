import { useEffect, useState } from "react";
import Button from "./Button.js";
import React from "react";
import {useEthers} from "@usedapp/core";
import {BLOCK_EXPLORERS, CHAIN_CURRENCIES} from "../../constants";
import {addChainToMetaMask, addTokenToMetamask} from "../../lib/metamask.js";

/*TODO: 
- Fetch time end, time start, rate, cap, and user cap from contract
- When click network button, switch to network
*/
const SaleCard = ({sale}) => {
  const { chainId } = useEthers();

  const [isOnChain, setIsOnChain] = useState(chainId == sale.chainId);
  useEffect(()=>{
    setIsOnChain(!!chainId && sale.chainId == chainId.toString());
  },[chainId])

  
  const blockExplorerUrl = BLOCK_EXPLORERS[sale.chainId];
  const currency = CHAIN_CURRENCIES[sale.chainId];
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
                ❌{(sale.chainId != "1" && sale.chainId != "3" && sale.chainId != "4" && sale.chainId != "42" && sale.chainId != "420" ) &&
                  <Button onClick={()=>addChainToMetaMask(sale.chainId)}>{"<->"}</Button>
                }
              </>)
              }
            </td>
          </tr>
          <tr>
            <td>Start Countdown</td>
            <td>{"00:00:00"}</td>
          </tr>
          <tr>
            <td>End Countdown</td>
            <td>{"00:00:00"}</td>
          </tr>
          <tr>
            <td>Cap</td>
            <td>
              {"1000"} {currency}
            </td>
          </tr>
          <tr>
            <td>User Cap:</td>
            <td>
              {"1000"} {currency}
            </td>
          </tr>
          <tr>
            <td>GYFI available:</td>
            <td>{"1000"} GYFI</td>
          </tr>
          <tr>
            <td>Rate:</td>
            <td>
              {"1"} GYFI/{currency}
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
