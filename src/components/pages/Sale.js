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
      {saleConfigState.error ? (<>
        <p>To view GYFI sales, connect your web3 wallet.</p>
      </>) : (<>
        {saleConfigState.sales.map((saleConfig)=><SaleCard saleConfig={saleConfig} />)}
      </>)
      }
    </main>
  </>
  );
}

export default Sale;
