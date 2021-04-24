import { ethers } from "ethers";

export const getEnsJson = async (ensName) => {
    const provider = ethers.getDefaultProvider("mainnet",{
        infura:process.env.REACT_APP_INFURA
    });
    const resolver = await provider.getResolver(ensName);
    const contentHash = await resolver.getContentHash();
    const res = await fetch(`https://ipfs.fleek.co/ipfs/${contentHash.slice(7)}`);
    return (await res.json())
}