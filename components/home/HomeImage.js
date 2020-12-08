const HomeImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbikeVelaBike.jpg?alt=media&token=45e92ba1-b417-4536-8b66-6347d7d272bf' className='desktop' alt='Vela 2 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbikeVelaBike.jpg?alt=media&token=45e92ba1-b417-4536-8b66-6347d7d272bf' className='mobile' alt='Smartbike - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 50vh;
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
          height: calc(100vh - 3.5em);
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
