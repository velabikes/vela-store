const FooterImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FSmartbikeBlackFriday.jpeg?alt=media&token=c8fdb557-4174-4eeb-919b-c751cd41c532' className='desktop' alt='Bike Elétrica Vela Black Friday' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FSmartbikeBlackFriday.jpeg?alt=media&token=c8fdb557-4174-4eeb-919b-c751cd41c532' className='mobile' alt='Vela Bike Black Friday' />
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
          object-position: 80% 20%;
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

export default FooterImage
