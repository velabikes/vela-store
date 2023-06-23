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
  const [preloadedImages, setPreloadedImages] = useState([]);
  const imageCount = 320; // Replace this with the number of images in your sequence

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const currentImageIndex = Math.floor(scrollPercentage * imageCount);
        setCurrentImage(currentImageIndex);

        // Pré-carregar imagens adicionais
        const preloadRange = 300; // Defina o número de frames para pré-carregar
        const startIndex = Math.max(0, currentImageIndex - preloadRange);
        const endIndex = Math.min(
          imageCount - 1,
          currentImageIndex + preloadRange
        );
        const imagesToPreload = [];

        for (let i = startIndex; i <= endIndex; i++) {
          imagesToPreload.push(
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = `/velax/image-scroll-1mob/VX-Pathmob-Scroll-${i}.webp`;
              img.onload = resolve;
              img.onerror = reject;
            })
          );
        }

        Promise.all(imagesToPreload)
          .then(() => {
            setPreloadedImages(imagesToPreload);
          })
          .catch((error) => {
            console.error("Error preloading images:", error);
          });
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
          end: "500%  0 ",
          pin: true,
          scrub: 0.001,
          pinSpacing: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div className="scroll-image-container" ref={containerRef}>
      {preloadedImages.length > 0 ? (
        <img
          ref={scrollContainerRef}
          src={`/velax/image-scroll-1mob/VX-Pathmob-Scroll-${currentImage}.webp`}
          alt="Scrolling image sequence"
          style={{ objectFit: "cover", height: "100vh", width: "100vw" }}
        />
      ) : null}
    </div>
  );
};

export default ScrollImageContainerMob;
