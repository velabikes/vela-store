const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/82b613c5-7dd6-4c3c-b539-bbdb523b3cc9.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/872f4266-37f2-4939-bd66-5745b34ff5e8.jpg' className='mobile' alt='' />
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
