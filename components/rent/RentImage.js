const RentImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAlugue-Vela-2-Bain.jpg?alt=media&token=0f92939b-a51b-4d01-afc1-5acff3b41605' className='desktop' alt='Aluguel bike elétrica com App' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAlugue-Vela-2-Bain.jpg?alt=media&token=0f92939b-a51b-4d01-afc1-5acff3b41605' className='mobile' alt='Aluguel bike elétrica com App' />
    <style jsx>{`
      img {
        min-height: 62vh;
        object-fit: cover;
        object-position: 47% 50%;
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

export default RentImage
