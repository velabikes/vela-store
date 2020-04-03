const HomeImage = () =>
  <div>
    <img src='../../static/home.png' className='desktop' alt='' />
    <img src='../../static/home.png' className='mobile' alt='' />
    <style jsx>{`
      img {
        min-height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
        margin-top: 12rem;
        object-position: 55% 45%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 2rem;
          width: 100%;
          object-fit: cover;
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
