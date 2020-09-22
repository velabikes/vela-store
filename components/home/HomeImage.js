const HomeImage = () =>
  <div>
    <img src='/static/home-desktop.png' className='desktop' alt='Vela 2 - Vela Bikes' />
    <img src='/static/home-mobile.png' className='mobile' alt='Vela 2 - Vela Bikes' />
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

export default HomeImage
