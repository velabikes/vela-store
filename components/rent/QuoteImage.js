const QuoteImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FNovo-Normal-Pandemia-Bike.jpg?alt=media&token=0ab7eab4-28b3-4237-a3f1-2cf23761464c' className='desktop' alt='O novo normal de bike elétrica' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FNovo-Normal-Pandemia-Bike.jpg?alt=media&token=0ab7eab4-28b3-4237-a3f1-2cf23761464c' className='mobile' alt='Vá de bike pós-pandemia' />
    <style jsx>{`
      div {
        width: 100%;
        display: flex;;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        z-index: 1;
        width: 100%;
        height: 50vh;
      }
      .desktop {
        display: none;
      }
      
      @media only screen and (min-width: 768px) {
          img {
            height: 100vh;
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
            height: 95vh;
            width: 55vw;
            object-position: left;
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

export default QuoteImage