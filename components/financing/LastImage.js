const LastImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Bike-Eletrica-Smart.jpg?alt=media&token=550593a6-91b8-474d-a905-a5f70f8f40e9' className='desktop' alt='Financiamento bike elétrica com App' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Bike-Eletrica-Smart.jpg?alt=media&token=550593a6-91b8-474d-a905-a5f70f8f40e9' className='mobile' alt='Parcelar bike elétrica com App' />
    <style jsx>{`
      img {
        min-height: 68vh;
        object-fit: cover;
        object-position: 53% 100%;
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
            object-position: 50% 60%;
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

export default LastImage
