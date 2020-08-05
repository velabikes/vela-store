const LandingImage = () =>
  <div className='cover'>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbike.jpg?alt=media&token=db783cf6-c08e-49ae-98d8-3816c3d06ddf' className='desktop' alt='Vela 2 - Smartbike' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbike.jpg?alt=media&token=db783cf6-c08e-49ae-98d8-3816c3d06ddf' className='mobile' alt='Vela 2 - Smartbike' />
    <style jsx>{`
      img {
        height: 55vh;
        object-fit: cover;
        object-position: 40% 60%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          object-fit: cover;
          max-width: 100%;
          height: calc(100vh - 3.5em);
          object-position: 50% 70%;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
        }
      }
      }
    `}</style>
  </div>

export default LandingImage
