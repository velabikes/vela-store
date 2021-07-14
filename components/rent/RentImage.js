const RentImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FAluguel-Vela-2.jpg?alt=media&token=cf45b181-b3cf-41fc-9f12-f660dd9a2277' className='desktop' alt='Aluguel bike elétrica com App' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FAssinatura-Vela-2.jpg?alt=media&token=a8e1d298-094a-4972-9654-e94e1ce02376' className='mobile' alt='Aluguel bike elétrica com App' />
    <style jsx>{`
      img {
        height: 55vh;
        object-fit: cover;
        object-position: 50% 50%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
          img {
            margin-top: 0em;
            max-width: 100vw;
            object-fit: cover;
            height: 36em;
            object-position: 50% 50%;
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

export default RentImage
