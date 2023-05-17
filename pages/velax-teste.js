import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

const VelaX = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const videoRef = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      setIsScrolling(true);

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop.current) {
        // Scroll Down
        setIsReversed(false);
        if (videoRef.current.paused) videoRef.current.play();
      } else {
        // Scroll Up
        setIsReversed(true);
        if (videoRef.current.paused) videoRef.current.play();
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        if (!videoRef.current.paused) videoRef.current.pause();
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const intervalId = setInterval(() => {
        if (isScrolling) {
          if (isReversed) {
            videoRef.current.currentTime -= 0.05;
          } else {
            videoRef.current.currentTime += 0.05;
          }
        }
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [isScrolling, isReversed]);

  return (
    <div className="VelaX Landing">
      <Head>
        <title>Vela X</title>
        <meta httpEquiv="content-language" content="pt-br" />
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://velabikes.com.br/velax-teste"
        />
      </Head>
      <div className="VideoContainer">
        <video
          src="/velax/velax-release.mp4"
          controls
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="TopVideo">
        <div className="VideoContainer">
          <video
            ref={videoRef}
            src="/velax/vx-animation1.mp4"
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div id="scroll-steps">
        <div id="step1"></div>
        <div id="step2"></div>
        <div id="step3"></div>
        <div id="step4"></div>
      </div>
      <style jsx>{`
        .VideoContainer {
          max-width: 100%;
          overflow: hidden;
        }

        .VideoContainer video {
          object-fit: cover;
        }

        .TopVideo {
          background-color: #1d1d1d;
          position: relative;
          overflow: hidden;
        }
        .VelaX.Landing {
          background-color: #000000;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
