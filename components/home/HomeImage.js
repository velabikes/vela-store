const HomeImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVelaBikes.jpg?alt=media&token=31691630-473c-4f34-bd14-07e31d038fa1' className='desktop' alt='Black Friday Vela 2 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVelaBikes.jpg?alt=media&token=31691630-473c-4f34-bd14-07e31d038fa1' className='mobile' alt='Black Friday Smartbike - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 55vh;
        object-fit: cover;
        object-position: 60% 40%;
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
          object-position: 40% 60%;
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

export default HomeImage
