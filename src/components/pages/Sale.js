import Header from '../common/Header.js';
import SaleCard from '../common/SaleCard.js';
import {useSaleConfig} from "../../hooks/useSaleConfig.js";

function Sale() {
  const saleConfig = useSaleConfig();

  return (
  <>
    <Header />
    <main>
      {(saleConfig && saleConfig.sales && !saleConfig.error) ? (<>
        {saleConfig.sales.map((sale)=><SaleCard sale={sale} key={sale.name} />)}
      </>) : (<>
        <p>Fetching GYFI sales from ENS...</p>
      </>)
      }
    </main>
  </>
  );
}

export default Sale;
