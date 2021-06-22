const MainImage = () => (
  <div className="container">
    <div className="rainbow">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Bike-Eletrica-Vela.jpg?alt=media&token=368e9a22-18c5-46ae-9c3b-0d7f0db9cef8"
        className="desktop"
        alt="Financiamento exclusivo Vela Bikes"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Bike-Eletrica-Vela.jpg?alt=media&token=368e9a22-18c5-46ae-9c3b-0d7f0db9cef8"
        className="mobile"
        alt="Financiamento bike elétrica"
      />
    </div>
    <style jsx>{`
      .rainbow {
        position: relative;
        z-index: 0;
        width: 28em;
        height: 28em;
        overflow: hidden;
      }

      .rainbow::before {
        content: "";
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: #399953;
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(#3D9771, #3D9771),
          linear-gradient(#38CDA0, #38CDA0), linear-gradient(#84E8CD, #84E8CD),
          linear-gradient(#B7F0D9, #B7F0D9);
        animation: rotate 4s linear infinite;
      }

      .rainbow::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 6px;
        top: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        background: white;
      }

      @keyframes rotate {
        100% {
          transform: rotate(1turn);
        }
      }

      .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        object-position: 70% 50%;
        z-index: 1;
        width: 96.7%;
        margin-left: 0.4em;
        margin-top: 0.4em;
        height: 59vh;
      }
      .desktop {
        display: none;
      }

        @media only screen and (min-width: 768px) {
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
          .container {
            justify-content: center;
            margin-top: 4em;
            max-width: 50%;
          }
          img {
            margin-left: 0.43em;
            margin-top: 0.4em;
            height: 27.2em;
            width: 27.2em;
            object-position: 50% 50%;
          }
        }
      }
    `}</style>
  </div>
);

export default MainImage;
