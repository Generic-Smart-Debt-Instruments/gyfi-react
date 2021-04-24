import {utils} from "ethers";
const { formatEther, parseEther } = utils;

export function weiToFixed(bn,decimals) {
    if(!bn) return null;
    return Number(formatEther(bn)).toFixed(2);
}