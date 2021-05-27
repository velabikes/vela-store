const RentImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAluguel-Bike-Aplicativo.jpg?alt=media&token=a5714d99-03c9-4df7-bd9e-8e89c3c83f04' className='desktop' alt='Aluguel bike elétrica com App' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAluguel-Bike-Aplicativo.jpg?alt=media&token=a5714d99-03c9-4df7-bd9e-8e89c3c83f04' className='mobile' alt='Aluguel bike elétrica com App' />
    <style jsx>{`
      img {
        min-height: 70vh;
        object-fit: cover;
        object-position: 20% 50%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
          img {
            margin-top: 0em;
            max-width: 100vw;
            object-fit: cover;
            max-height: calc(100vh - 3.5em);
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

export default RentImage
