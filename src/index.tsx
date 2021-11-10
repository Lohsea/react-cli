/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-06 11:23:24
 * @LastEditTime: 2021-11-10 14:46:58
 */

import React from "react";
import ReactDOM from "react-dom";
// import * as wasm from "starks_proofgen";
import HomePage from "./pages/homePage";

import "./styles/index.scss";
import "antd/dist/antd.css";

function App(): React.ReactElement {
  return <HomePage />;
}

ReactDOM.render(<App />, document.getElementById("root"));
