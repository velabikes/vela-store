const TestRideImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2Fbetterquality%2FSmartbikeTeste.jpg?alt=media&token=62b878cf-6147-45af-81d4-4f975f09251a' className='desktop' alt='SmartBike Teste' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2Fbetterquality%2FBikeEletricaTeste.jpg?alt=media&token=d112e109-6f2d-4bb5-86b0-33a544e1eb9c' className='mobile' alt='Test-Ride Vela 2' />
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

export default TestRideImage
