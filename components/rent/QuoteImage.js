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
        height: 45vh;
        object-position: top;
      }
      .desktop {
        display: none;
      }
      
      @media only screen and (min-width: 768px) {
          img {
            height: 70vh;
            width: 100%;
            object-position: top;
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
            width: 70vw;
            object-position: top;
          }
          .mobile {
            display: none;
          }
          .desktop {
          }
      @media only screen and (min-width: 1400px) {
          img {
            max-height: 70%;
            width: 80vw;
          }
        }
      }
    }
    `}</style>
  </div>

export default QuoteImage