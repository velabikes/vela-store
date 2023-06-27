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
  const imageCount = 859; // Replace this with the number of images in your sequence

  const lastFrameTimeRef = useRef(0);
  const previousImageRef = useRef(null);

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
          end: "650%  0 ",
          pin: true,
          scrub: 0.1,
          pinSpacing: true,
          markers: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    const preLoadImages = async () => {
      const imagePromises = [];

      for (let i = 0; i < imageCount; i++) {
        const image = new Image();

        // Wrap the image loading in a promise
        const promise = new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });

        // Set the image source
        image.src = `/velax/image-scroll-1/VX-Scroll-${i}.webp`;

        // Wait for the image to load before resolving the promise
        await promise;

        imagePromises.push(promise);
      }

      console.log("All images pre-loaded");
    };

    preLoadImages();
  }, []);

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

  return (
    <div className="scroll-image-container" ref={containerRef}>
      <img
        ref={scrollContainerRef}
        src={`/velax/image-scroll-1/VX-Scroll-${currentImage}.webp`}
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
