const HomeImage = () =>
  <>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/e03025c0-147c-4613-88a4-820cdbaafb64.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/ad548cdf-0c52-4504-8522-57ce53d7c4c9.jpg' className='mobile' alt='' />
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
