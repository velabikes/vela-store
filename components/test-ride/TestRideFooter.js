const TestRideFooter = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2Fbetterquality%2FTestRideVelaBike.jpg?alt=media&token=18685c66-fc14-4155-8918-d1f7c674ceca' className='desktop' alt='TestRide VelaBike' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2Fbetterquality%2FTesteBikeEletrica.jpg?alt=media&token=bd413e4b-43a2-41f7-ade8-a7ab2960f9ef' className='mobile' alt='Teste Vela Bike' />
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
