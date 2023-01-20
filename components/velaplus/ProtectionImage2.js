const ProtectionImage2 = () => (
  <div>
    <img
      src="/plus/Group-10-2-2.png"
      className="desktop"
      alt="Alarme e Segurança para Bike Elétrica"
    />
    <img
      src=""
      className="mobile"
      alt="Proteção contra Roubo e Furto para Bikes Elétricas"
    />
    <style jsx>{`
      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        z-index: 1;
        width: 100%;
        height: 70vh;
      }
      .desktop {
        display: none;
      }

      @media only screen and (min-width: 768px) {
        img {
          height: 70vh;
          width: 100%;
          object-position: 50% 50%;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
        @media only screen and (min-width: 1200px) {
          div {
            justify-content: flex-start;
          }
          img {
            height: 70vh;
            width: 100vw;
            object-position: center;
          }
          .mobile {
            display: none;
          }
          .desktop {
          }
          @media only screen and (min-width: 1680px) {
            img {
              max-height: 70%;
            }
          }
        }
      }
    `}</style>
  </div>
);

export default ProtectionImage2;
