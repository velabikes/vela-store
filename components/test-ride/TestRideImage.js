const TestRideImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRide-Vela-Bike-Eletrica.jpg?alt=media&token=e468b94a-a6c2-4043-bf1f-3f6a63daa6ad' className='desktop' alt='SmartBike Teste' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRide-Vela-Bike-Eletrica.jpg?alt=media&token=e468b94a-a6c2-4043-bf1f-3f6a63daa6ad' className='mobile' alt='Test-Ride Vela 2' />
    <style jsx>{`
      img {
        min-height: 60vh;
        object-fit: cover;
        object-position: 30% 70%;
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
          object-position: 30% 70%;
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
