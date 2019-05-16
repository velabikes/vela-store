const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/69c9e416-74cd-4be5-a8db-7a04763999cb.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/5a250267-fd4a-44db-8103-8dff543ffa91.jpg' className='mobile' alt='' />
    <div className='cta'>
      <div className='slogan'>
        <h1>#VADEVELA</h1>
        <h4>Algum texto eletrica</h4>
      </div>
      <button>Monte a sua</button>
    </div>
    <style jsx>{`
      .HomePage {
         position: relative;
      }
      img {
        height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
      }
      .cta {
        position: absolute;
        left: calc(3% + 2rem);
        top: calc(3% + 2rem);
      }
      h1, h4 {
        margin: 0
      }
      button {
        margin-top: 1rem;
      }
      .desktop {
        display: none;
      }
      :global(.copyright) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
      @media only screen and (min-width: 768px) {
        img {
          height: calc(100vh);
        }
        .cta {
          text-align: right;
          top: calc(1% + 2rem);
          right: calc(1% + 2rem);
        }
        h1 {
          font-size: ${4.40}em;
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

export default HomePage
