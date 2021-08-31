/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-06 11:23:24
 * @LastEditTime: 2021-08-30 16:53:03
 */

import React from "react";
import ReactDOM from "react-dom";
// import * as wasm from "starks_proofgen";
import config from "./config/config.json";

import Api from "./components/Api/Api";
import HomePage from "./pages/homePage";
import EventQueue from "./components/Event/EventQueue";

import "./styles/index.scss";
import "antd/dist/antd.css";

function App(): React.ReactElement {
  return (
    <Api url={config.url}>
      {/* <EventQueue> */}
      <HomePage />
      {/* </EventQueue> */}
    </Api>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
