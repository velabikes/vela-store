import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Comparelights = () => {
  const comparelightsContainerRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = 214; // Replace this with the number of images in your sequence

  const lastFrameTimeRef = useRef(0);
  const previousImageRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
      const currentImageIndex = Math.floor(scrollPercentage * imageCount);
      setCurrentImage(currentImageIndex);
    };

    window.addEventListener("comparelights", handleScroll);

    return () => {
      window.removeEventListener("comparelights", handleScroll);
    };
  }, [imageCount]);

  useEffect(() => {
    const comparelightsContainerElement = comparelightsContainerRef.current;
    if (comparelightsContainerElement) {
      gsap.to(comparelightsContainerElement, {
        scrollTrigger: {
          trigger: comparelightsContainerElement,
          start: "top 0",
          end: "1000% 0",
          pin: true,
          scrub: 0.1,
          pinSpacing: true,
          markers: true,
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
        image.src = `/velax/comparelights/comparelights-${i}.webp`;

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
      const currentImageElement = comparelightsContainerRef.current;
      const previousImageElement = previousImageRef.current;

      if (currentImageElement) {
        currentImageElement.style.opacity = 1;
        if (previousImageElement) {
          previousImageElement.style.opacity = 0;
        }
        previousImageRef.current = currentImageElement.cloneNode(true);
      }
    }

    animationRef.current = requestAnimationFrame(renderFrame);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="comparelights-container">
      <img
        ref={comparelightsContainerRef}
        src={`/velax/comparelights/comparelights-${currentImage}.webp`}
        alt="Scrolling image sequence"
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
        }}
      />
    </div>
  );
};

export default Comparelights;
