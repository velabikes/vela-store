import React, { useState, useRef, useEffect } from "react";

const IntroDarkMob = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    height: "90%",
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
    fontSize: "13px",
    width: "100vw,",
    fontWeight: 50,
    fontFamily: "Filson-pro", // Ajuste da família da fonte
    padding: "10px 10px",
    border: "1px solid white",
    borderRadius: "0%",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
  };

  const hideIntroDarkClass = isPlaying ? "hide-intro-dark" : "";

  return (
    <div style={containerStyle}>
      <video ref={videoRef} width="100%" autoPlay muted loop playsInline>
        <source src="/velax/introdark-mob.mp4" type="video/mp4" />
      </video>
      <video
        className={hideIntroDarkClass}
        style={videoStyle}
        src="/velax/velax.mp4"
        type="video/mp4"
        controls
      />
      {!isPlaying && (
        <button
          className={hideIntroDarkClass}
          style={playButtonStyle}
          onClick={toggleVideo}
        >
          ASSISTA AO VÍDEO
        </button>
      )}
    </div>
  );
};

export default IntroDarkMob;
