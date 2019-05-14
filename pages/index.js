const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/2152620d-9d5f-4fca-ae1a-c62d6a80720e.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/65bd53d9-b574-4107-b641-c6100423667b.jpg' className='mobile' alt='' />
    <div className='cta'>
      <h1>Vá de Vela</h1>
      <h5>Algum texto eletrica</h5>
      <button>Compre a sua</button>
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
        text-align: right;
        left: calc(5%);
        bottom: calc(5%);
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        .cta {
          text-align: right;
          top: calc(5% + 10px);
          right: calc(5% + 20px);
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
