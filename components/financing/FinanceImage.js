const FinanceImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Vela-2.jpg?alt=media&token=7080fcca-237d-4650-b2f9-665114ea2161' className='desktop' alt='Financiamento bike elétrica com App' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Vela-2.jpg?alt=media&token=7080fcca-237d-4650-b2f9-665114ea2161' className='mobile' alt='Parcelar bike elétrica com App' />
    <style jsx>{`
      img {
        min-height: 62vh;
        object-fit: cover;
        object-position: 42% 50%;
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
            object-position: 50% 100%;
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

export default FinanceImage
