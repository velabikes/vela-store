import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageContainerMob = () => {
  const scrollContainerRef = useRef(null);
  const [containerRef, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = 340; // Replace this with the number of images in your sequence

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const scrollSpeed = 2.5; // Ajuste esse valor para aumentar a velocidade de rolagem
        const currentImageIndex = Math.floor(
          scrollPercentage * imageCount * scrollSpeed
        );
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
          end: "4000vh top",
          pin: true,
          scrub: 0.01, // Adjust this value to increase/decrease the transition sensitivity
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

        const promise = new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });

        image.url = `/velax/image-scroll-1mob/introrendermob-${i}.webp`;

        imagePromises.push(promise);
      }

      Promise.all(imagePromises).then(() => {
        console.log("All images pre-loaded");
      });
    };

    preLoadImages();
  }, [imageCount]);

  return (
    <div className="scroll-image-container" ref={containerRef}>
      <img
        ref={scrollContainerRef}
        src={`/velax/image-scroll-1mob/introrendermob-${currentImage}.webp`}
        alt="Scrolling image sequence"
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
          marginTop: "0vh",
        }}
      />
    </div>
  );
};

export default ScrollImageContainerMob;
