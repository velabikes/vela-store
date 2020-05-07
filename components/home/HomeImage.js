const HomeImage = () =>
  <div>
    <img src='../../static/home.png' className='desktop' alt='' />
    <img src='../../static/home.png' className='mobile' alt='' />
    <style jsx>{`
      img {
        min-height: 60vh;
        object-fit: cover;
        object-position: 46% 54%;
        margin-top: 1em;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          max-width: 100vw;
          object-fit: contain;
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
