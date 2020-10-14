const TestRideFooter = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRideVelaBike.jpg?alt=media&token=80adafe3-b276-4554-a3d8-e58935911a07' className='desktop' alt='TestRide VelaBike' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTesteVelaBike.jpg?alt=media&token=672defcb-39ad-4e2b-ad3e-ca46482bd6d5' className='mobile' alt='Teste Vela Bike' />
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

export default TestRideFooter
