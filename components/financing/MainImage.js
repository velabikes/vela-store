const MainImage = () => (
  <div>
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
    <style jsx>{`
      img {
        object-fit: cover;
        object-position: 70% 100%;
        z-index: 1;
        width: 100%%;
        height: 50vh;
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
          img {
            height: 30em;
            width: 30em;
            object-position: 50% 50%;
          }
        }
      }
    `}</style>
  </div>
);

export default MainImage;
