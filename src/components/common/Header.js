import React from "react";
import { useEthers } from "@usedapp/core";
import Button from "./Button.js";
import { CHAIN_LABELS } from "../../constants";
import { NavLink } from "react-router-dom";

function Header() {
  const { activateBrowserWallet, account, chainId } = useEthers();

  return (
    <header >
      <NavLink to="/">GYFI</NavLink>
      <section className="header">
        {account ? (
          <div className="info">
            {chainId && (
              <span className="network">{CHAIN_LABELS[chainId]}</span>
            )}
            <span className="account">{`${account}`}</span>
          </div>
        ) : (
          <Button onClick={() => activateBrowserWallet()}>
            Connect Wallet
          </Button>
        )}
      </section>
    </header>
  );
}

export default Header;
