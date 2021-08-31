/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-13 11:21:34
 * @LastEditTime: 2021-08-30 21:22:47
 */
import React from "react";
import Back from "../../components/back";
import InputBalance from "./inputBalance";
import InputAddress from "./inputAddress";
import { InjectedAccountExt } from "../../components/Api/types";
import transfer from "../../images/transfer.svg";

import "./index.scss";

interface Props {
  account: InjectedAccountExt;
  allAccounts: InjectedAccountExt[];
}

function Transfer({ account, allAccounts }: Props): React.ReactElement {
  return (
    <div className="transfer">
      <div className="transfer-content">
        <Back className="back-btn" />
        <div className="content">
          <img src={transfer} alt="transfer" className="img" />
          <div className="address-wrapper">
            <InputAddress
              showBalance
              defaultValue={account}
              canSelect={false}
              label="send from account"
            />
          </div>
          <div className="address-wrapper">
            <InputAddress
              defaultValue={account}
              label="send to address"
              options={allAccounts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
