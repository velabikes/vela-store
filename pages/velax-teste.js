import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VelaX = () => {
  const scrollContainerRef = useRef(null);
  const [containerRef, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = 262; // Replace this with the number of images in your sequence

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const currentImageIndex = Math.floor(scrollPercentage * imageCount);
        setCurrentImage(currentImageIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, imageCount]);

  useEffect(() => {
    const scrollContainerElement = scrollContainerRef.current;
    if (scrollContainerElement) {
      gsap.to(scrollContainerElement, {
        scrollTrigger: {
          trigger: scrollContainerElement,
          start: "-50vh top",
          end: "bottom -600%",
          pin: true,
          scrub: 0.1,
          pinSpacing: true,
          markers: true,
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
      <div className="scroll-image-container" ref={containerRef}>
        <img
          ref={scrollContainerRef}
          src={`/velax/image-scroll-1/scroll-image-sequence-${currentImage}.webp`}
          alt="Scrolling image sequence"
          style={{ objectFit: "cover", height: "100vh", width: "100%" }} // adjust the height and width here
        />
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
          height: auto;
          background-color: #000000;
        }
        .play-video {
          width: 100%;
          height: 100vh;
        }
        .scroll-image-container {
          position: sticky;
          marging-top: 0px;
          z-index: 2;
        }
        .image-1 {
          width: 100%;
          height: 100vh;
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
