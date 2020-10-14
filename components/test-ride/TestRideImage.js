const TestRideImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FSmartbikeTeste.jpg?alt=media&token=9c7dfda4-d52b-42b7-9db5-580912f1b831' className='desktop' alt='SmartBike Teste' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRideVela2.jpg?alt=media&token=67d76c33-aa93-4704-81c8-72ffca0ef7a0' className='mobile' alt='Test-Ride Vela 2' />
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
