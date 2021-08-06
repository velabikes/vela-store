const HomeImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBike-Eletrica-Smart-Vela-Bikes.jpg?alt=media&token=83330a4b-06f4-4931-8b4f-e8afbff476c9' className='desktop' alt='Vela 2 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBike-Eletrica-Smart-Vela-Bikes.jpg?alt=media&token=83330a4b-06f4-4931-8b4f-e8afbff476c9' className='mobile' alt='Smartbike - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 50vh;
        object-fit: cover;
        object-position: right;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          max-width: 100vw;
          object-fit: cover;
          height: calc(100vh - 3.5em);
          object-position: bottom-right;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: cover;
        }
      }
    }
  `}</style>
</div>

export default HomeImage
