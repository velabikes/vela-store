const HomeImage = () =>
  <div>
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/14a21362-d361-491d-bb00-a695be810a20.jpg' className='desktop' alt='' />
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/14a21362-d361-491d-bb00-a695be810a20.jpg' className='mobile' alt='' />
    <style jsx>{`
      img {
        min-height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
        margin-top: 9rem;
        object-position: 50% 50%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: -2rem;
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
