import React from "react";
import { useEthers } from "@usedapp/core";
import Button from "./Button.js";
import { CHAIN_LABELS } from "../../constants";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme.js";
import Particles from 'react-particles-js';

function Header() {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="header-container">
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
    <Particles
        params={{
          "particles": {
              "number": {
                  "value": 20
              },
              "size": {
                  "value": {
                    min: -20,
                    max: 10
                  },
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.3
                  }
              },
              "color":{
                "value":[
                  "#ff0000",
                  "#00ff00",
                  "#0000ff"
                ]
              },
              "links":{
                "enable":false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "out_mode": "out",
                  "direction":"top"
              },
          }
      }} />
    </div>
  );
}

export default Header;
