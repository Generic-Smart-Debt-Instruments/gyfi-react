import { useEffect, useState } from "react";

import {useEthers} from "@usedapp/core";
import {getEnsJson} from '../lib/ens.js';

export function useSaleConfig() {
    const { library } = useEthers();
    const [saleConfig, setSaleConfig] = useState(null);

    useEffect(()=>{
    (async () => {
        setSaleConfig(
            await getEnsJson(library,"data.gyfi.eth")
            );
        })()
    },[library]);

    return saleConfig;
}