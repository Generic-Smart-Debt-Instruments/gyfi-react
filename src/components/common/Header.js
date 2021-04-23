import React from "react";
import { useEthers } from "@usedapp/core";
import Button from "./Button.js";
import { CHAIN_LABELS } from "../../constants";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme.js";

function Header() {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const [theme, toggleTheme] = useTheme();

  return (
    <header>
      <NavLink to="/">GYFI</NavLink>
      <section className="header">
        <Button padding="0px" onClick={toggleTheme}>
          {!theme ? "☽" : "☼"}
        </Button>
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
