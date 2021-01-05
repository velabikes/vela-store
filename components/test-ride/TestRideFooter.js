const TestRideFooter = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FVela-SmartBike-TestRide.jpg?alt=media&token=520da99d-efc3-44e6-bb9a-aa681a1197f2' className='desktop' alt='Test-Ride Vela Bike' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FVela-SmartBike-TestRide.jpg?alt=media&token=520da99d-efc3-44e6-bb9a-aa681a1197f2' className='mobile' alt='Teste Vela Bike Elétrica' />
    <style jsx>{`
      img {
        min-height: 60vh;
        object-fit: cover;
        object-position: 80% 20%;
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
