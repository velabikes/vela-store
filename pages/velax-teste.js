import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VelaX = () => {
  const scrollVideoRef = useRef(null);
  const [videoRef, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const videoElement = scrollVideoRef.current;
    const duration = videoElement.duration;

    const handleScroll = () => {
      if (inView) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const currentTime = duration * scrollPercentage;
        videoElement.currentTime = currentTime;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (inView) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [inView, videoRef]);

  useEffect(() => {
    const videoElement = scrollVideoRef.current;
    if (videoElement) {
      gsap.to(videoElement, {
        scrollTrigger: {
          trigger: videoElement,
          start: "top top",
          end: "bottom -500px",
          pin: true,
          scrub: 0.1,
          pinSpacing: true,
          markers: false,
          muted: true,
          playsinline: true,
          preload: "auto",
        },
      });
    }
  }, []);

  return (
    <div className="VelaX Landing">
      <div className="play-video">
        <video width="100%" height="100%" controls>
          <source src="/velax/velax-release.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="scroll-video-container">
        <div className="scroll-video-1" ref={videoRef}>
          <video ref={scrollVideoRef} width="100%" muted loop>
            <source src="/velax/scroll-video-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="image-1">
        <img src="/velax/teste1.png" alt="Image 1" />
      </div>
      <div className="image-2">
        <img src="/velax/teste2.png" alt="Image 2" />
      </div>
      <style jsx>{`
        .VelaX {
          width: 100%;
          height: 100%;
          background-color: #000000;
        }
        .play-video {
          width: 100%;
          height: 100vh;
        }
        .scroll-video-container {
          position: sticky;
          top: 0;
          height: 100vh;
          z-index: 2;
        }
        .scroll-video-1 {
          height: 100%;
          width: auto;
          z-index: 2;
        }
        .image-1 {
          width: 100%;
          height: 160vh;
        }
        .image-2 {
          width: 100%;
          height: 90vh;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
