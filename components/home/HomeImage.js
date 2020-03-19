const HomeImage = () =>
  <div>
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/9429484c-ea48-4f6f-845e-76a2b2f6fcbd.png' className='desktop' alt='' />
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/9429484c-ea48-4f6f-845e-76a2b2f6fcbd.png' className='mobile' alt='' />
    <style jsx>{`
      img {
        min-height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
        margin-top: 14rem;
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
