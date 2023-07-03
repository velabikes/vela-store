import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explosion = () => {
  const scrollContainerRef = useRef(null);
  const [containerRef, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = 147; // Replace this with the number of images in your sequence

  useEffect(() => {
    const imagesLoaded = Array.from({ length: imageCount }, (_, index) => {
      const image = new Image();
      image.src = `/velax/explosion/explode-${index}.webp`;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(imagesLoaded).then(() => {
      console.log("All images pre-loaded");
    });
  }, [imageCount]);

  useEffect(() => {
    if (inView) {
      const scrollContainerElement = scrollContainerRef.current;
      gsap.to(scrollContainerElement, {
        scrollTrigger: {
          trigger: scrollContainerElement,
          start: "top 5%",
          end: "300% top",
          scrub: 0.1,
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentImageIndex = Math.floor(progress * imageCount);
            setCurrentImage(currentImageIndex);
          },
        },
      });
    }
  }, [inView, imageCount]);

  return (
    <div className="scroll-image-container" ref={containerRef}>
      <img
        ref={scrollContainerRef}
        src={`/velax/explosion/explode-${currentImage}.webp`}
        alt="Scrolling image sequence"
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
        }}
      />

      <style jsx>{`
        .scroll-image-container {
          position: relative;
          padding-bottom: 300vh;

          padding-top: 20vh;
        }
      `}</style>
    </div>
  );
};

export default Explosion;
