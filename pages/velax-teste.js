import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

const VelaX = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const maxFrames = 236; // substitua pelo número total de frames que você possui
  const scrollContainerHeight = 900; // substitua pela altura real do seu scroll container
  const lastFrame = maxFrames; // número do último quadro
  const scrollTriggerPosition = 500; // posição da rolagem na página em que os frames devem começar a alterar

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= scrollTriggerPosition) {
        // Mapeia a posição de rolagem para o número do quadro
        const frameNumber =
          Math.floor(
            ((scrollTop - scrollTriggerPosition) / scrollContainerHeight) *
              maxFrames
          ) + 1;
        setCurrentFrame(frameNumber);

        if (frameNumber === lastFrame) {
          // O último quadro foi atingido, permitir a continuação da rolagem
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastFrame, scrollTriggerPosition]);

  const handleVideoPlay = () => {
    setVideoLoaded(true);
  };

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
        <img
          src={`/velax/frames/frame${currentFrame}.png`}
          alt="Current Frame"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
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
