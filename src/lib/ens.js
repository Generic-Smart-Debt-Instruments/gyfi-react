export const getEnsJson = async (provider, ensName) => {
    if(!provider) return {error:true,msg:"No Provider"}
    const resolver = await provider.getResolver(ensName);
    if(!resolver) return {error:true,msg:"No resolver"}
    const contentHash = await resolver.getContentHash();
    if(!contentHash) return {error:true,msg:"No contentHash"}
    const res = await fetch(`https://ipfs.fleek.co/ipfs/${contentHash.slice(7)}`);
    return (await res.json())
}