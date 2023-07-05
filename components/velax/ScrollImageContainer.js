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
  const imageCount = 285; // Replace this with the number of images in your sequence

  const lastFrameTimeRef = useRef(0);
  const previousImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const scrollSpeed = 3.8; // Ajuste esse valor para aumentar a velocidade de rolagem
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
          end: getScrollTriggerEnd(),
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

        // Wrap the image loading in a promise
        const promise = new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });

        // Set the image source
        image.url = `/velax/image-scroll-1/introrender-${i}.webp`;

        imagePromises.push(promise);
      }

      // Wait for all promises to resolve
      Promise.all(imagePromises).then(() => {
        console.log("All images pre-loaded");
      });
    };

    preLoadImages();
  }, [imageCount]);

  const renderFrame = (timestamp) => {
    const timeDiff = timestamp - lastFrameTimeRef.current;
    const minFrameTime = 1000 / 10; // Minimum frame time for 30fps

    if (timeDiff >= minFrameTime) {
      lastFrameTimeRef.current = timestamp;
      // Render frame logic here
      const currentImageElement = scrollContainerRef.current;
      const previousImageElement = previousImageRef.current;

      if (currentImageElement) {
        currentImageElement.style.opacity = 1;
        if (previousImageElement) {
          previousImageElement.style.opacity = 0;
        }
        previousImageRef.current = currentImageElement.cloneNode(true);
      }
    }

    requestAnimationFrame(renderFrame);
  };

  useEffect(() => {
    requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(renderFrame);
    };
  }, []);

  const getScrollTriggerEnd = () => {
    const screenWidth = window.innerWidth;
    let scrollTriggerEnd;

    if (screenWidth < 1000) {
      scrollTriggerEnd = "2400vh 0";
    } else if (screenWidth < 1200) {
      scrollTriggerEnd = "2400vh 0";
    } else if (screenWidth < 1400) {
      scrollTriggerEnd = "2600vh 0";
    } else if (screenWidth < 1600) {
      scrollTriggerEnd = "2800vh 0";
    } else if (screenWidth < 1800) {
      scrollTriggerEnd = "3000vh 0";
    } else {
      scrollTriggerEnd = "3200vh 0";
    }

    return scrollTriggerEnd;
  };

  return (
    <div className="scroll-image-container" ref={containerRef}>
      <img
        ref={scrollContainerRef}
        src={`/velax/image-scroll-1/introrender-${currentImage}.webp`}
        alt="Scrolling image sequence"
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100%",
          paddingTop: "5vh",
        }} // adjust the height and width here
      />
    </div>
  );
};

export default ScrollImageContainer;
