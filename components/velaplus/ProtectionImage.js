const ProtectionImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FProtecaoRouboFurtoBikeEletrica.jpg?alt=media&token=cfdd7f43-902c-47f9-a420-5fb1b4fba062' className='desktop' alt='Alarme e Segurança para Bike Elétrica' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FAlarmeBikeEletrica.jpg?alt=media&token=c995145c-a7a2-49fe-bae0-6234d61f5adc' className='mobile' alt='Proteção contra Roubo e Furto para Bikes Elétricas' />
    <div className='animatedBG'>
    </div>
    <style jsx>{`
      div {
        width: 100%;
        display: flex;;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        z-index: 1;
        width: 100%;
        height: 60vh;
      }
      .desktop {
        display: none;
      }
      .animatedBG {
          animation: flashing 1s infinite;
          position: absolute;
          width: 100%;
          height: 60vh;
          z-index: 2;
          background-color: #C0022F;
      }
      
      @keyframes flashing {
        0% {
          opacity: 0.01;
        }
        100% {
          opacity: 0.08;
        }
      }
      
      @media only screen and (min-width: 768px) {
          img {
            height: 60vh;
            width: 100%;
            object-position: 50% 50%;
          }
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
          .animatedBG {
            height: 60vh;
        }
        @media only screen and (min-width: 1200px) {
          img {
            height: 100vh;
            width: 100%;
            object-position: 50% 50%;
          }
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
          .animatedBG {
            height: 100vh;
        }
        
      @media only screen and (min-width: 1680px) {
          img {
            max-height: 70%;
          }
        }
      }
    }
    `}</style>
  </div>

export default ProtectionImage
