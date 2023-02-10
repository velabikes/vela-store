import React from "react";
import Head from "next/head";
import { compose, lifecycle } from "recompose";
import Button from "../Button";

const Freshchat = () => (
  <div className="whats">
    <a href="https://wa.me/5511963934737" target="_blank">
      <img src="/Head/whatsapp-icon-velagreen.svg" />
    </a>

    <style jsx>{`
      .whats {
        display: flex;
        max-width: 50px;
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 70;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Freshchat;
