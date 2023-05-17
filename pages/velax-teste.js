import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

const VelaX = () => {
  const videoRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (videoRef.current) {
        const progress = currentScrollTop / maxScrollTop;
        videoRef.current.currentTime = progress * videoRef.current.duration;
      }

      if (currentScrollTop > lastScrollTop.current) {
        // Scroll Down
        if (videoRef.current.paused) videoRef.current.play();
      } else {
        // Scroll Up
        if (videoRef.current.paused) videoRef.current.play();
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;

      timeoutId = setTimeout(() => {
        if (!videoRef.current.paused) videoRef.current.pause();

        // Check if the video has ended
        if (videoRef.current.ended) {
          setVideoEnded(true);
        } else {
          setVideoEnded(false);
        }
      }, 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
      {!videoEnded && (
        <div className="TopVideo">
          <div className="VideoContainer">
            <video
              ref={videoRef}
              src="/velax/vx-animation1.mp4"
              muted
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
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
          max-height: 90vh;
        }

        .VideoContainer video {
          object-fit: cover;
        }

        .TopVideo {
          background-color: #1d1d1d;
          position: relative;
          height: 90vh;
        }

        .VelaX.Landing {
          background-color: #000000;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
