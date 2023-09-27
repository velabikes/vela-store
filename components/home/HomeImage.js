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
        min-height: 50vh;
        object-fit: cover;
        object-position: right;
        object-position: top;
      
        width: 100%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: -5em;
          object-fit: cover;
          width: 100vw;
          height: calc(95);
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
