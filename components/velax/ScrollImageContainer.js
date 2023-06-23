import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageContainer = () => {
  const scrollContainerRef = useRef(null);
  const [containerRef, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = 403; // Replace this with the number of images in your sequence

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
          start: "top 0",
          end: "600%  0 ",
          pin: true,
          scrub: 0.1,
          pinSpacing: true,
          markers: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    const preLoadImages = () => {
      const imagePromises = [];

      for (let i = 0; i < imageCount; i++) {
        const image = new Image();
        image.src = `/velax/image-scroll-1/VX-Path-Scroll-${i}.webp`;

        const promise = new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });

        imagePromises.push(promise);
      }

      Promise.all(imagePromises)
        .then(() => {
          console.log("All images pre-loaded");
        })
        .catch((error) => {
          console.error("Error pre-loading images:", error);
        });
    };

    preLoadImages();
  }, [imageCount]);

  return (
    <div className="scroll-image-container" ref={containerRef}>
      <img
        ref={scrollContainerRef}
        src={`/velax/image-scroll-1/VX-Path-Scroll-${currentImage}.webp`}
        alt="Scrolling image sequence"
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
        }} // adjust the height and width here
      />
    </div>
  );
};

export default ScrollImageContainer;
