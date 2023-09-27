const HomeImage = () => (
  <div>
    <img
      src="/images/homebannerliq.png"
      className="desktop"
      alt="Vela 2 - Vela Bikes"
    />
    <img
      src="/images/homebannerliqmob.png"
      className="mobile"
      alt="Smartbike - Vela Bikes"
    />
    <style jsx>{`
      img {
        margin-top: -2em;
      
        object-fit: cover;
        object-position: center;
        object-position: top;
        margin-top: -1vh;
        height: 40vh;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: -3em;
          object-fit: cover;
          max-width: 100vw;
          height: 120vh;
          object-position: bottom-right;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    }
  `}</style>
  </div>
);

export default HomeImage;
