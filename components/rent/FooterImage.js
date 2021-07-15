const FooterImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAluguel-Smartbike-Vela.jpg?alt=media&token=79274556-2863-461c-8541-81fa5b95f623' className='desktop' alt='Aluguel Bike Elétrica Vela' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAluguel-Smartbike-Vela.jpg?alt=media&token=79274556-2863-461c-8541-81fa5b95f623' className='mobile' alt='Aluguel Smartbike Vela' />
    <style jsx>{`
      img {
        min-height: 45vh;
        object-fit: cover;
        object-position: 55% 90%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          max-width: 100vw;
          object-fit: cover;
          max-height: calc(100vh - 3.5em);
          object-position: 80% 20%;
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

export default FooterImage
