const LandingImage = () =>
  <div className='cover'>
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/7eb486f0-1f91-47cf-ba9c-987b7f7efaab.jpg' className='desktop' alt='Vela 2' />
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/bcf7e612-c3e8-49ce-a80d-24223f70b459.jpg' className='mobile' alt='Vela 2' />
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
