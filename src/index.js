import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import './index.scss';
import Home from "./components/pages/Home.js";
import Sale from "./components/pages/Sale.js";
import reportWebVitals from './reportWebVitals';
import {DAppProvider} from '@usedapp/core';
import {
  CHAINS,
  MUTICALL_ADDRESSES,
  RPC_URLS,
  SUPPORT_CHAINS,
} from "./constants";

const dappConfig = {
  readOnlyChainId: CHAINS.Rinkeby,
  readOnlyUrls: RPC_URLS,
  supportedChains: SUPPORT_CHAINS,
  multicallAddresses: MUTICALL_ADDRESSES,
};

ReactDOM.render(
  <HashRouter>
    <DAppProvider config={dappConfig}>
      <Route exact path="/" component={Home} />
      <Route path="/sale" component={Sale}/>
    </DAppProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
