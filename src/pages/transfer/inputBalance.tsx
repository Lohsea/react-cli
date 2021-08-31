/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-30 20:28:06
 * @LastEditTime: 2021-08-30 20:29:59
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

interface AccountSelectProps {
  account: InjectedAccountExt;
  allAccounts: InjectedAccountExt[];
}
function InputBalance({ account }: AccountSelectProps) {
  function getSiOptions(
    symbol: string,
    decimals?: number
  ): { text: string; value: string }[] {
    return formatBalance
      .getOptions(decimals)
      .map(({ power, text, value }): { text: string; value: string } => ({
        text: power === 0 ? symbol : text,
        value,
      }));
  }
  console.log(11111, formatBalance.getOptions());
  return (
    <div>
      <Identicon
        value={account.address}
        theme="polkadot"
        className="account-img"
      />
    </div>
  );
}

export default InputBalance;
