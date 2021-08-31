/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-30 16:38:02
 * @LastEditTime: 2021-08-30 16:50:11
 */
import React, { useState, useContext } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Modal } from "antd";
import Identicon from "@polkadot/react-identicon";
import ApiContext from "../../components/Api/apiContext";
import { InjectedAccountExt } from "../../components/Api/types";
import logo from "../../images/logo.svg";
import Home from "../home";
import Kyc from "../kyc";
import Rt from "../transfer";
import Rc from "../crowdfunding";
import Cs from "../coming";

import "./index.scss";

function HomePage(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currAccount, setCurrAccount] = useState<InjectedAccountExt>(null);
  const apiContext = useContext(ApiContext);

  // 格式化账户名称，去除（extenison）后缀
  const formatName = (account) => {
    return account?.map((item) => ({
      ...item,
      meta: {
        ...item.meta,
        name: item.meta.name.replace(/(.*)\(extension\)/g, "$1"),
      },
    }));
  };

  const [allAccounts] = useState<InjectedAccountExt[] | undefined>(
    formatName(apiContext.injectedAccounts)
  );

  console.log(999, apiContext, allAccounts);

  const handleChooseAccount = (item) => {
    setCurrAccount(item);
    handleCancel();
  };

  const isLogin = () => {
    return currAccount && Object.keys(currAccount).length > 0;
  };
  const handleConnect = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="homePage">
      <div className="homePage-header">
        <div className="header-wrapper">
          <img src={logo} className="logo" alt="logo" />
          <div onClick={handleConnect} className="right-part">
            {isLogin() ? (
              <>
                <Identicon
                  value={currAccount.address}
                  theme="polkadot"
                  className="account-img"
                />
                <span className="account-name">{currAccount.meta.name}</span>
              </>
            ) : (
              <span className="connect-btn">connect to your wallet</span>
            )}
          </div>
        </div>
        <Modal
          title="选择账户"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          {allAccounts?.map((item) => {
            return (
              <p key={item.address} onClick={() => handleChooseAccount(item)}>
                {item.meta.name}
              </p>
            );
          })}
        </Modal>
      </div>
      <div className="homePage-content">
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <Home account={currAccount} />
            </Route>
            <Route path="/kyc" exact>
              <Kyc />
            </Route>
            <Route path="/rt" exact>
              <Rt account={currAccount} allAccounts={allAccounts} />
            </Route>
            <Route path="/rc" exact component={Rc} />
            <Route path="/Cs" exact component={Cs} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default HomePage;
