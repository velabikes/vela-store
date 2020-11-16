const BFImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVela2020.jpg?alt=media&token=c94e0d3f-5f5d-47eb-9b15-94d75bde074d' className='desktop' alt='Black Friday 2020 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVela2020.jpg?alt=media&token=c94e0d3f-5f5d-47eb-9b15-94d75bde074d' className='mobile' alt='Black Friday 2020 - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 70vh;
        object-fit: cover;
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

export default BFImage
