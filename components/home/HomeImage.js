const HomeImage = () =>
  <>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/044a15e1-8b62-4da8-b8c9-c2a916c24c58.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/466089ba-19e7-4a1b-8d05-35810dc89e4d.jpg' className='mobile' alt='' />
    <style jsx>{`
      img {
        height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          height: calc(100vh);
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    `}</style>
  </>

export default HomeImage
