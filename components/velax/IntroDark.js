import React, { useState, useRef, useEffect } from "react";

const IntroDark = () => {
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
    height: "100%",
    objectFit: "cover",
    zIndex: 9999,
    opacity: isPlaying ? 1 : 0,
  };

  const playButtonStyle = {
    display: isPlaying ? "none" : "block",
    position: "absolute",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
  };

  const captionStyle = {
    display: isPlaying ? "none" : "block",
    position: "absolute",
    top: "calc(50% + 50px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "25px",
    textAlign: "center",
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
        src="/velax/vx-launch-full.mp4"
        type="video/mp4"
        controls
      />
      <button
        className={hideIntroDarkClass}
        style={playButtonStyle}
        onClick={toggleVideo}
      >
        ▶
      </button>
      <p className={hideIntroDarkClass} style={captionStyle}>
        Assista ao vídeo completo.
      </p>
    </div>
  );
};

export default IntroDark;
