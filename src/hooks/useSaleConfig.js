import { useEffect, useState } from "react";

import {getEnsJson} from '../lib/ens.js';

export function useSaleConfig() {
    const [saleConfig, setSaleConfig] = useState(null);

    useEffect(()=>{
    (async () => {
        setSaleConfig(
            await getEnsJson("data.gyfi.eth")
            );
        })()
    },[]);

    return saleConfig;
}