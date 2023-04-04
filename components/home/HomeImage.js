const HomeImage = () => (
  <div>
    <img
      src="/images/Vela_Bikes_Quadro_Baixo_Azul_Home_Banner_Main_Desktop.webp"
      className="desktop"
      alt="Vela 2 - Vela Bikes"
    />
    <img
      src="/images/Vela_Bikes_Quadro_Baixo_Azul_Home_Banner_Main_Mobile.webp"
      className="mobile"
      alt="Smartbike - Vela Bikes"
    />
    <style jsx>{`
      img {
        min-height: 50vh;
        object-fit: cover;
        object-position: right;
        width: 100%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          object-fit: cover;
          width: 101vw;
          height: calc(101vh - 3.5em);
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
