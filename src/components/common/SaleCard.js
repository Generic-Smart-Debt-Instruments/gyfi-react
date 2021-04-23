import Button from "./Button.js";
import React from "react";

/*TODO: 
- Get correct block explorer
- Fetch time end, time start, rate, cap, and user cap from contract
- When click netwok button, switch to network
*/
const SaleCard = ({saleConfig}) => {
  console.log("saleConfig"+saleConfig)
  const blockExplorerUrl = "https://rinkeby.etherscan.io"
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{saleConfig.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Network:</td>
            <td>
              <Button>{saleConfig.network}</Button>
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
              {"1000"} {"BNB"}
            </td>
          </tr>
          <tr>
            <td>User Cap:</td>
            <td>
              {"1000"} {"BNB"}
            </td>
          </tr>
          <tr>
            <td>GYFI available:</td>
            <td>{"1000"} GYFI</td>
          </tr>
          <tr>
            <td>Rate:</td>
            <td>
              {"1"} GYFI/{"BNB"}
            </td>
          </tr>
          <tr>
            <td>Contract Address:</td>
            <td>
              <a href={`${blockExplorerUrl}/address/${saleConfig.address}`}>{saleConfig.address}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SaleCard;
