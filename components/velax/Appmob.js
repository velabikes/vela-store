import React, { useState, useEffect, useRef } from "react";

const Appmob = () => {
  const [scrollY, setScrollY] = useState(0);
  const AppmobRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateScrollSpeed = (speed) => {
    if (AppmobRef.current) {
      const rect = AppmobRef.current.getBoundingClientRect();
      const AppmobStart = rect.top + window.scrollY;
      return (scrollY - AppmobStart) * speed;
    }
    return 0;
  };

  const calculateTransform = (speed) => {
    const scrollSpeed = calculateScrollSpeed(speed);
    return `translate3d(0, ${scrollSpeed}px, 0)`;
  };

  return (
    <div className="Appmob-container">
      <div className="Appmob" ref={AppmobRef}>
        <div className="parallax-images">
          <img
            className="trees"
            src="/velax/app/trees.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.39)}px)` }}
            alt="Trees"
          />
          <img
            className="turnoff"
            src="/velax/app/turnoff.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.35)}px)` }}
            alt="Turn Off"
          />
          <img
            className="notifications"
            src="/velax/app/notifications.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.35)}px)` }}
            alt="Notifications"
          />
          <img
            className="nav"
            src="/velax/app/nav.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.4)}px)` }}
            alt="Navigation"
          />
          <img
            className="paneltext"
            src="/velax/app/paneltext.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.41)}px)` }}
            alt="Panel Text"
          />
          <img
            className="orangedetail"
            src="/velax/app/orangedetail.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.25)}px)` }}
            alt="Orange Detail"
          />
          <img
            className="gps"
            src="/velax/app/gps.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.3)}px)` }}
            alt="GPS"
          />
          <img
            className="mockup"
            src="/velax/app/mockup.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.48)}px)` }}
            alt="Mockup"
          />
          <img
            className="greendetail"
            src="/velax/app/greendetail.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.42)}px)` }}
            alt="Green Detail"
          />
          <img
            className="modes"
            src="/velax/app/modes.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.4)}px)` }}
            alt="Modes"
          />
          <img
            className="bluedetail"
            src="/velax/app/bluedetail.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.26)}px)` }}
            alt="Blue Detail"
          />
          <img
            className="settingtext"
            src="/velax/app/settingtext.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.42)}px)` }}
            alt="Setting Text"
          />
          <img
            className="dashboard"
            src="/velax/app/dashboard.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.28)}px)` }}
            alt="Dashboard"
          />
          <img
            className="bt"
            src="/velax/app/bt.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.37)}px)` }}
            alt="Bluetooth"
          />
          <img
            className="myvela"
            src="/velax/app/myvela.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.38)}px)` }}
            alt="My Vela"
          />
          <img
            className="map"
            src="/velax/app/map.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.24)}px)` }}
            alt="Map"
          />
          <img
            className="help"
            src="/velax/app/help.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.32)}px)` }}
            alt="Help"
          />
        </div>
      </div>

      <style jsx>{`
        .Appmob-container {
          position: relative;
          height: 400vh;
          width: 100vw;
          background-color: #ebbd99;
          overflow: hidden;
          margin-bottom: -190vh;
        }

        .Appmob {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 400vh;
          overflow: auto;
          overflow-x: hidden;
          margin-top: 0vh;
        }

        .parallax-images {
          position: relative;
          height: 100%;
          width: 100vw;

          transform-style: preserve-3d;
        }

        .parallax-images img {
          position: absolute;
          height: auto;
          width: 100%;
          max-width: 100%;
          margin-top: 25vh;
        }

        @media only screen and (max-width: 1200px) {
          .parallax-images img {
            margin-top: 30vh;
          }
        }

        /* Image-specific styles */
        .parallax-images .trees {
          top: 13vw;
          left: 6vw;
          height: auto;
          width: 28vw;
        }

        .parallax-images .turnoff {
          top: 57vw;
          left: -3vw;
          height: auto;
          width: 27vw;
        }

        .parallax-images .notifications {
          top: 93vw;
          left: -5vw;
          height: auto;
          width: 30vw;
        }

        .parallax-images .nav {
          top: 115vw;
          left: -25vw;
          height: auto;
          width: 45vw;
        }

        .parallax-images .paneltext {
          top: 140vw;
          left: 5vw;
          height: auto;
          width: 30vw;
          z-index: 2;
        }

        .parallax-images .orangedetail {
          top: 18vw;
          left: 3vw;
          height: auto;
          width: 2vw;
        }

        .parallax-images .gps {
          top: 80vw;
          left: 73vw;
          height: auto;
          width: 30vw;
        }

        .parallax-images .mockup {
          top: 70vw;
          left: 28vw;
          height: auto;
          width: 70vw;
          z-index: 2;
        }

        .parallax-images .greendetail {
          top: 170vw;
          left: 50vw;
          height: auto;
          width: 25vw;
          z-index: 5;
        }

        .parallax-images .modes {
          top: 160vw;
          left: 30vw;
          height: auto;
          width: 45vw;
          z-index: 3;
        }

        .parallax-images .bluedetail {
          top: 0vw;
          left: 63vw;
          height: auto;
          width: 27vw;
        }

        .parallax-images .settingtext {
          top: 51vw;
          left: 39vw;
          height: auto;
          width: 32vw;
        }

        .parallax-images .dashboard {
          top: 5vw;
          left: 65vw;
          height: auto;
          width: 30vw;
        }

        .parallax-images .bt {
          top: 22vw;
          left: 34vw;
          height: auto;
          width: 30vw;
        }

        .parallax-images .myvela {
          top: 110vw;
          left: 80vw;
          height: auto;
          width: 40vw;
        }

        .parallax-images .map {
          top: 30vw;
          left: 75vw;
          height: auto;
          width: 23vw;
        }

        .parallax-images .help {
          top: 0vw;
          left: 37vw;
          height: auto;
          width: 23vw;
        }
      `}</style>
    </div>
  );
};

export default Appmob;
