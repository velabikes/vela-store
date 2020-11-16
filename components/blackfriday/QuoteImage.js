const QuoteImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBikeEl%C3%A9tricaVelaBlackFriday.jpg?alt=media&token=d143a52f-3e16-40f3-94da-098ab8461b5d' className='desktop' alt='Smartbike Black Friday' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBikeEl%C3%A9tricaVelaBlackFriday.jpg?alt=media&token=d143a52f-3e16-40f3-94da-098ab8461b5d' className='mobile' alt='Bike Elétrica Black Friday' />
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