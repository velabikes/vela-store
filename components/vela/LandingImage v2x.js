const LandingImage = () => (
  <div className="cover">
    <img src="/images/v2x.png" className="desktop" alt="Vela 2 - Smartbike" />
    <img src="/images/v2x.png" className="mobile" alt="Vela 2 - Smartbike" />
    <style jsx>{`
      img {
        height: 55vh;
        object-fit: cover;
        object-position: 40% 60%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          object-fit: cover;
          max-width: 100%;
          height: calc(101vh - 3.5em);
          object-position: 50% 70%;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
        }
      }
      }
    `}</style>
  </div>
);

export default LandingImage;
