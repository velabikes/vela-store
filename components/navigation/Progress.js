import NProgress from "nprogress";
import Router from "next/router";
import React, { useEffect } from "react";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Progress = () => {
  useEffect(() => {
    return () => {
      NProgress.remove();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #29d;
          position: fixed;
          z-index: 99999;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
      `}</style>
      <div />
    </>
  );
};

export default Progress;
