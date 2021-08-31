/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-30 20:33:47
 * @LastEditTime: 2021-08-30 21:14:23
 */
import React from "react";
import Identicon from "@polkadot/react-identicon";
import {
  BN_ONE,
  BN_TEN,
  BN_TWO,
  BN_ZERO,
  formatBalance,
  isBn,
  isUndefined,
} from "@polkadot/util";
import { InjectedAccountExt } from "../../components/Api/types";

import "./inputAddress.scss";

interface AccountSelectProps {
  label: string;
  canSelect?: boolean;
  showBalance?: boolean;
  defaultValue: InjectedAccountExt;
  options?: InjectedAccountExt[];
}
function InputBalance({
  label,
  defaultValue,
  showBalance = false,
  canSelect = true,
  options = [],
}: AccountSelectProps) {
  return (
    <div className="input-address">
      <Identicon
        value={defaultValue?.address}
        theme="polkadot"
        className="account-img"
      />
      <div className="label-wrapper">
        <span className="label">{label}</span>
        {showBalance && (
          <span className="balance">transferrable 1.1529 MUNIT</span>
        )}
      </div>
      <div className="account-wrapper">
        <span className="name">{defaultValue.meta.name}</span>
        <span className="address">{defaultValue.address}</span>
      </div>
    </div>
  );
}

export default InputBalance;
