import { useEffect, useState } from "react";
import Header from '../common/Header.js';
import SaleCard from '../common/SaleCard.js';
import {useEthers} from "@usedapp/core";
import {getEnsJson} from '../../lib/ens.js';

function Sale() {
  const { library } = useEthers();
  const [saleConfigState, setSaleConfigState] = useState({});

  useEffect(()=>{
    (async () => {
      setSaleConfigState(
        await getEnsJson(library,"data.gyfi.eth")
      );
    })()
  },[library]);

  return (
  <>
    <Header />
    <main>
      {(saleConfigState && saleConfigState.sales && !saleConfigState.error) ? (<>
        {saleConfigState.sales.map((saleConfig)=><SaleCard saleConfig={saleConfig} />)}
      </>) : (<>
        <p>To view GYFI sales, connect your web3 wallet.</p>
      </>)
      }
    </main>
  </>
  );
}

export default Sale;
