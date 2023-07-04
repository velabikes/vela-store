import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateScrollSpeed = (speed) => {
    if (appRef.current) {
      const rect = appRef.current.getBoundingClientRect();
      const appStart = rect.top + window.scrollY;
      return (scrollY - appStart) * speed;
    }
    return 0;
  };
  return (
    <div className="app-container">
      <div className="App" ref={appRef}>
        <div className="parallax-images">
          <img
            className="trees"
            src="/velax/app/trees.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.25)}px)` }}
            alt="Trees"
          />
          <img
            className="turnoff"
            src="/velax/app/turnoff.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.12)}px)` }}
            alt="Turn Off"
          />
          <img
            className="notifications"
            src="/velax/app/notifications.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.1)}px)` }}
            alt="Notifications"
          />
          <img
            className="nav"
            src="/velax/app/nav.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.12)}px)` }}
            alt="Navigation"
          />
          <img
            className="paneltext"
            src="/velax/app/paneltext.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.3)}px)` }}
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
            style={{ transform: `translateY(${calculateScrollSpeed(0.25)}px)` }}
            alt="GPS"
          />
          <img
            className="mockup"
            src="/velax/app/mockup.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.52)}px)` }}
            alt="Mockup"
          />
          <img
            className="greendetail"
            src="/velax/app/greendetail.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.35)}px)` }}
            alt="Green Detail"
          />
          <img
            className="modes"
            src="/velax/app/modes.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.31)}px)` }}
            alt="Modes"
          />
          <img
            className="bluedetail"
            src="/velax/app/bluedetail.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.25)}px)` }}
            alt="Blue Detail"
          />
          <img
            className="settingtext"
            src="/velax/app/settingtext.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.24)}px)` }}
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
            style={{ transform: `translateY(${calculateScrollSpeed(0.32)}px)` }}
            alt="Bluetooth"
          />
          <img
            className="myvela"
            src="/velax/app/myvela.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.24)}px)` }}
            alt="My Vela"
          />
          <img
            className="map"
            src="/velax/app/map.svg"
            style={{ transform: `translateY(${calculateScrollSpeed(0.14)}px)` }}
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
        .app-container {
          position: relative;
          height: 400vh;
          width: 100vw;
          background-color: #ebbd99;
          overflow: hidden;
          margin-bottom: -180vh;
        }

        @media only screen and (min-width: 880px) {
          .app-container {
            margin-bottom: -240vh;
          }
        }

        @media only screen and (min-width: 1100px) {
          .app-container {
            margin-bottom: -200vh;
          }
        }

        @media only screen and (min-width: 1300px) {
          .app-container {
            margin-bottom: -150vh;
          }
        }
        @media only screen and (min-width: 1500px) {
          .app-container {
            margin-bottom: -110vh;
          }
        }
        @media only screen and (min-width: 1700px) {
          .app-container {
            margin-bottom: -90vh;
          }
        }

        @media only screen and (min-width: 1900px) {
          .app-container {
            margin-bottom: -60vh;
          }
        }

        @media only screen and (min-width: 2100px) {
          .app-container {
            margin-bottom: -35vh;
          }
        }

        .App {
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
          top: 8vw;
          left: 16vw;
          height: auto;
          width: 20vw;
        }

        .parallax-images .turnoff {
          top: 20vw;
          left: -2vw;
          height: auto;
          width: 18vw;
        }

        .parallax-images .notifications {
          top: 45vw;
          left: -5vw;
          height: auto;
          width: 25vw;
        }

        .parallax-images .nav {
          top: 65vw;
          left: -20vw;
          height: auto;
          width: 35vw;
        }

        .parallax-images .paneltext {
          top: 36vw;
          left: 20vw;
          height: auto;
          width: 22vw;
          z-index: 2;
        }

        .parallax-images .orangedetail {
          top: 17vw;
          left: 37vw;
          height: auto;
          width: 1.5vw;
        }

        .parallax-images .gps {
          top: 42vw;
          left: 68vw;
          height: auto;
          width: 18vw;
        }

        .parallax-images .mockup {
          top: 18vw;
          left: 36vw;
          height: auto;
          width: 50vw;
          z-index: 2;
        }

        .parallax-images .greendetail {
          top: 90vw;
          left: 50vw;
          height: auto;
          width: 25vw;
          z-index: 5;
        }

        .parallax-images .modes {
          top: 85vw;
          left: 35vw;
          height: auto;
          width: 33vw;
          z-index: 3;
        }

        .parallax-images .bluedetail {
          top: 7vw;
          left: 56vw;
          height: auto;
          width: 23vw;
        }

        .parallax-images .settingtext {
          top: 12vw;
          left: 61vw;
          height: auto;
          width: 22vw;
        }

        .parallax-images .dashboard {
          top: 23vw;
          left: 68vw;
          height: auto;
          width: 20vw;
        }

        .parallax-images .bt {
          top: 50vw;
          left: 19vw;
          height: auto;
          width: 20vw;
        }

        .parallax-images .myvela {
          top: 60vw;
          left: 78vw;
          height: auto;
          width: 35vw;
        }

        .parallax-images .map {
          top: 10vw;
          left: 88vw;
          height: auto;
          width: 20vw;
        }

        .parallax-images .help {
          top: 3vw;
          left: 37vw;
          height: auto;
          width: 18vw;
        }
      `}</style>
    </div>
  );
};

export default App;
