const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/b05ba3a8-9481-42f2-ad85-81b660fe6812.jpg' className='desktop' alt='' />
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
