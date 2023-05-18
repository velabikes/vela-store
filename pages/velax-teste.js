import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VelaX = () => {
  const scrollVideoRef = useRef(null);

  useEffect(() => {
    let videoDuration = scrollVideoRef.current.duration;
    gsap.to(scrollVideoRef.current, {
      currentTime: videoDuration,
      scrollTrigger: {
        trigger: ".scroll-video-1",
        scrub: 50,
        start: "top 80%",
        end: "50% 50%",
        markers: true,
      },
    });
  }, []);

  return (
    <div className="VelaX Landing">
      <div className="play-video">
        <video width="100%" height="100%" controls>
          <source src="/velax/velax-release.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="scroll-video-1">
        <video ref={scrollVideoRef} width="100%" muted loop>
          <source src="/velax/teste-animation-2.mp4" type="video/mp4" />
        </video>
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
        .scroll-video-1 {
          width: auto;
          height: 90vh;
        }
        .image-1 {
          width: 100%;
          height: 90vh;
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
