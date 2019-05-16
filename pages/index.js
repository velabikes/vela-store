const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/82b613c5-7dd6-4c3c-b539-bbdb523b3cc9.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/3ad24714-654d-48ec-88bc-42223879e6b1.jpg' className='mobile' alt='' />
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
        height: calc(100vh-4rem);
        object-fit: cover;
        width: 100%;
      }
      .cta {
        position: absolute;
        text-align: right;
        left: calc(5%);
        bottom: calc(5%);
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
          top: calc(1% + 10px);
          right: calc(1% + 20px);
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
