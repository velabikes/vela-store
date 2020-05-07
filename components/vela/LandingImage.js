const LandingImage = () =>
  <div className='cover'>
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/75a7b9b6-3a54-425d-8bfd-b07ca27f3fa4.jpg' className='desktop' alt='Vela 2' />
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/41e5ead0-a560-4bf9-9c72-f2cdf0c9ec5d.jpg' className='mobile' alt='Vela 2' />
    <style jsx>{`
      img {
        max-height: 100vh;
        object-fit: cover;
        object-position: 70% 30%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          object-fit: cover;
          max-height: calc(100vh - 3em);
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
