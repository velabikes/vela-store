import React, { useState, useEffect } from "react";
import Head from "next/head";
import { compose, lifecycle } from "recompose";
import { velaGreen, offBlack, darkGray, white } from "style/colors";
import Freshchat from "components/head/Freshchat";
import Modal from "components/Modal";

const CustomHead = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    const show = !showModal;
    setShowModal(show);
  };

  if(count < 1) {
    setTimeout(() => {
      setCount(count + 1);
    }, 10000);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 25000);
  }, [count]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal === true ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="Head">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P7VWQJT');`,
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/fav/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/fav/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/static/fav/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Freshchat />
      <Modal onClose={handleShowModal} show={showModal} />
      <style jsx global>{`
        body * {
          //outline: 1px solid rgba(200,0,0,0.1)
        }
        html,
        body {
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
          color: ${offBlack};
          background-color: ${white};
          font-family: Barlow, sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Barlow, sans-serif;
          margin-top: 0;
          margin-bottom: 0.5rem;
          text-transform: none;
        }
        h1,
        h2,
        h3 {
          font-weight: 700;
          color: ${velaGreen};
          line-height: 1.25em;
        }
        h4,
        h5,
        h6 {
          font-weight: 500;
          color: ${offBlack};
          text-transform: none;
          font-style: normal;
          line-height: 1.5em;
        }
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.2rem;
        }
        h4 {
          font-size: 1.1rem;
        }
        h5 {
          font-size: 1rem;
        }
        h6 {
          font-size: 0.9rem;
        }
        section h1,
        nav h1 {
          font-size: 2rem;
        }
        hr {
          margin: 1.3rem 0;
          border: 1px solid #e2e2e2;
        }
        div {
          box-sizing: border-box;
        }
        small {
          font-size: 0.8em;
          color: ${darkGray};
        }
        a,
        a:visited {
          color: ${velaGreen};
          text-decoration: none;
          cursor: pointer;
        }
        p {
          line-height: 1.5em;
          font-family: Barlow, sans-serif;
          margin-top: 0;
          margin-bottom: 0.8em;
        }
        img {
          vertical-align: middle;
          width: 100%;
        }
        ul {
          padding-left: 1.5em;
        }
        li {
          line-height: 1.5em;
          color: ${offBlack};
          margin: 0.2em;
          font-family: Barlow, sans-serif;
        }
        table {
          width: 100%;
          border-spacing: 0 0.372em;
        }
        table tr td:last-child {
          text-align: right;
        }
        // FORMS

        fieldset {
          margin-bottom: 1em;
          padding: 0;
          border: none;
        }
        legend {
          margin-bottom: 0.61em;
        }
        label {
          font-weight: 600;
          color: ${offBlack};
        }
        input:not([type="checkbox"]):not([type="radio"]) {
          width: 100%;
          border: 0;
          padding: 10px;
          margin-bottom: 0.61em;
          margin-top: 0.61em;
          border-radius: 0.5em;
          display: block;
          font-size: 1rem;
          font-family: Barlow, sans-serif;
          box-sizing: border-box;
          background: ${white};
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05),
            0 2px 3px rgba(0, 0, 0, 0.05);
        }
        input[type="radio"] {
          margin: 0.61em;
        }

        // PAGE TRANSITION

        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </div>
  );
};

export default compose(
  lifecycle({
    componentDidMount() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  })
)(CustomHead);
