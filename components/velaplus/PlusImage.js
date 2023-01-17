const PlusImage = () => (
  <div>
    <img
      src="/plus/Studio_Project-5-2.gif"
      className="desktop"
      alt="Assinatura Segurança Bike Elétrica"
    />
    <img
      src="/plus/Studio_Project-6-2.gif"
      className="mobile"
      alt="Segurança Vela"
    />
    <div className="animatedBG">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle medium shade4"></div>
      <div className="circle small shade5"></div>
      <div className="circle xsmall shade5"></div>
    </div>
    <div className="background">
      <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBackgroundVelaMais.png?alt=media&token=52c11c62-9743-45ac-89f5-1ab7d6cdcd17" />
    </div>
    <style jsx>{`
      div {
        background-color: #fbfaf8;
        height: auto;
        display: flex;;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        z-index: 3;
      }
      .background {
        position: absolute;
        width: 100%;
      }
      .background img {
        object-fit: cover;
        z-index: 1;
        opacity: 0.5;
        height: 100vh;
      }
      .desktop {
        display: none;
      }
      .animatedBG {
        width: 100vw;
        height: 70em;
        overflow: hidden;
        position: absolute;
        z-index: 1; 
      }
      .circle{
        position: absolute;
        border-radius: 50%;
        background: #B2F1FF;
        animation: scaleIn 2s infinite;
        box-shadow: 0px 0px 1px 0px #B2F1FF;
      }

      .xsmall{
        width: 100px;
        height: 100px;
      }
      
      .small{
        width: 200px;
        height: 200px;
      }

      .small{
        width: 200px;
        height: 200px;
      }
      
      .medium{
        width: 400px;
        height: 400px;
      }
      
      .large{
        width: 600px;
        height: 600px;
      }
      
      .xlarge{
        width: 800px;
        height: 800px;
      }
      
      .xxlarge{
        width: 1000px;
        height: 1000px;
      }

      .shade1{
        opacity: 0.2;
      }
      .shade2{
        opacity: 0.5;
      }
      
      .shade3{
        opacity: 0.7;
      }
      
      .shade4{
        opacity: 0.8;
      }
      
      .shade5{
        opacity: 0.9;
      }
      
      @keyframes scaleIn {
        0% {
          transform: scale(0.1);
          opacity: 0.6;
        }
       
        50% {
          transform: scale(1);
          opacity: 0.2;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
      }
      
      @media only screen and (min-width: 768px) {
          img {
            max-height: 85vh;
            width: 80%;
          }
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
          .animatedBG {
            overflow: hidden;
            width: 100%;
            height: 80em;
            z-index: 1;
          }
          .background img {
            width: 100%;
            height: 100%;
          }
          @media only screen and (min-width: 1200px) {
            .background img {
              min-height: 95vh;
            }
      @media only screen and (min-width: 1680px) {
          img {
            max-height: 70%;
          }
          .background img {
            height: 90%;
          }
        }
      }
    }
    `}</style>
  </div>
);

export default PlusImage;
