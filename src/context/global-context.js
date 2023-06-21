import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { createWeb3Object } from "../services/web3-services";
import config from "../config";
var web3Defaultobj;
export const web3GlobalContext = createContext();

export function Web3Global({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainGlobal, setChainGlobal] = useState("");
  const [provider, setProvider] = useState();
  const [web3Obj, setWeb3Obj] = useState();
  const [isAccChange, setIsAccChange] = useState(false);
  const [isAccDisconnect, setIsAccDisconnect] = useState(false);
  const [walletType, setWalletType] = useState("");

  const defaultState = async () => {
    web3Defaultobj = await createWeb3Object();
    setWeb3Obj(web3Defaultobj);
  };
  useLayoutEffect(() => {
    if (!walletAddress) {
      defaultState();
    }
  }, [walletAddress]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (acc) => {
        setWalletAddress(acc[0]);
        setIsAccChange(true);
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      //
      window.ethereum.on("disconnect", () => {
        setWeb3Obj(web3Defaultobj);
        console.log("disconnected");
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("networkChanged", function (networkId) {
        setChainGlobal(networkId);
      });
    }
  }, []);

  return (
    <web3GlobalContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        chainGlobal,
        setChainGlobal,
        provider,
        setProvider,
        web3Obj,
        setWeb3Obj,
        isAccChange,
        setIsAccChange,
        isAccDisconnect,
        setIsAccDisconnect,
        walletType,
        setWalletType,
      }}
    >
      {children}
    </web3GlobalContext.Provider>
  );
}
