/*
 * @Description:
 * @Author: lixin
 * @Date: 2021-08-13 11:21:34
 * @LastEditTime: 2021-08-30 17:33:29
 */
import React from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";

import { CardInfo } from "../../constant";

import "./index.scss";

interface Props {
  account?: {};
}

function Home({ account }: Props): React.ReactElement {
  const history = useHistory();

  const isLogin = account && Object.keys(account).length > 0;

  const handleClick = (url) => {
    if (!isLogin && url) {
      message.info("Please connect to your wallet");
      return;
    }
    if (url) {
      history.push(url);
    }
  };

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="content">
          {CardInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="content-item"
                onClick={() => {
                  handleClick(item.url);
                }}
              >
                <img
                  src={isLogin ? item.imgHover : item.img}
                  alt={item.title}
                  className="img"
                />
                <div className="title-wrapper">
                  <h2 className="title">{item.title}</h2>
                  <h3 className="sub-title">{item.subTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
