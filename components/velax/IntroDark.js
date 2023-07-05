import React, { useState, useRef, useEffect } from "react";

const IntroDark = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const videoElement = videoRef.current;

      if (
        document.fullscreenElement || // Verificar se o documento está em modo de tela cheia
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      ) {
        exitFullscreen(); // Sair do modo de tela cheia antes de reproduzir o segundo vídeo
      }

      videoElement.play();
    }
  }, [isPlaying]);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setShowCloseButton(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const containerStyle = {
    position: "relative",
  };

  const videoStyle = {
    display: isPlaying ? "block" : "none",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "80%",
    objectFit: "cover",
    zIndex: 99,
    opacity: isPlaying ? 1 : 0,
  };

  const playButtonStyle = {
    display: isPlaying ? "none" : "block",
    position: "absolute",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "15px",
    fontWeight: 50,
    fontFamily: "Filson-pro", // Ajuste da família da fonte
    padding: "10px 20px",
    border: "1px solid white",
    borderRadius: "0%",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
  };

  const closeButtonStyle = {
    display: showCloseButton ? "block" : "none",
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "15px",
    fontWeight: 50,
    fontFamily: "Filson-pro",
    padding: "5px 10px",
    border: "1px solid white",
    borderRadius: "0%",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
    zIndex: "99",
  };

  const hideIntroDarkClass = isPlaying ? "hide-intro-dark" : "";

  return (
    <div style={containerStyle}>
      <video ref={videoRef} width="100%" autoPlay muted loop playsInline>
        <source src="/velax/introdark.mp4" type="video/mp4" />
      </video>
      <video
        className={hideIntroDarkClass}
        style={videoStyle}
        src="/velax/velax.mp4"
        type="video/mp4"
        controls="true"
      />
      {!isPlaying && (
        <button
          className={hideIntroDarkClass}
          style={playButtonStyle}
          onClick={() => {
            toggleVideo();
            setShowCloseButton(true);
          }}
        >
          ASSISTIR VIDEO
        </button>
      )}
      {showCloseButton && (
        <button style={closeButtonStyle} onClick={closeVideo}>
          X
        </button>
      )}
    </div>
  );
};

export default IntroDark;
