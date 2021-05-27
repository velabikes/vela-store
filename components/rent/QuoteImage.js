const QuoteImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FNovo-Normal-Pandemia-Bike.jpg?alt=media&token=0ab7eab4-28b3-4237-a3f1-2cf23761464c' className='desktop' alt='O novo normal de bike elétrica' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FNovo-Normal-Pandemia-Bike.jpg?alt=media&token=0ab7eab4-28b3-4237-a3f1-2cf23761464c' className='mobile' alt='Vá de bike pós-pandemia' />
    <style jsx>{`
      img {
        min-height: 60vh;
        object-fit: cover;
        object-position: 55% 90%;
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
          object-position: 50% 50%;
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

export default QuoteImage