const InvestImage = () =>
  <div className='cover'>
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/5b2adc54-09c8-4a13-ad7a-744bc364427a.jpeg' className='desktop' alt='' />
    <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/5b2adc54-09c8-4a13-ad7a-744bc364427a.jpeg' className='mobile' alt='' />
    <style jsx>{`
      img {
        height: calc(60vh);
        object-fit: cover;
        width: 100%;
      }
      .desktop {
        display: none;
      }
      .cover {
        position: relative;
      }
      @media only screen and (min-width: 768px) {
        img {
          height: calc(70vh);
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    `}</style>
  </div>

export default InvestImage
