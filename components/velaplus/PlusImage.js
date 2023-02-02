const PlusImage = () => (
  <div>
    <div>
      <img
        src="/plus/Main_bike_desktop.png"
        className="desktop"
        alt="Assinatura Segurança Bike Elétrica"
      />

      <img
        src="/plus/main_mobile.gif"
        className="mobile"
        alt="Segurança Vela"
      />
    </div>

    <div className="animatedBG">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle medium shade4"></div>
      <div className="circle small shade5"></div>
      <div className="circle xsmall shade5"></div>
    </div>

    <div className="background">
      <img src="/plus/BG_Vplus.png" />
    </div>

    <div className="title">
      <img src="/plus/new_vplus.png" />
    </div>

    <style jsx>{`
      div {
        background-color: #D6451;
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
        z-index: 0;
        opacity: 1;
        height: 100vh;
      }
      .desktop {
        display: none;
      }
      .animatedBG {
        width: 100vw;
        height: 100em;
        overflow: hidden;
        position: absolute;
        z-index: 2; 
      }
      .circle{
        position: absolute;
        border-radius: 50%;
        background: #8acca8;
        animation: scaleIn 2.1s infinite;
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
        opacity: 0.5;
      }
      .shade2{
        opacity: 0.5;
      }
      
      .shade3{
        opacity: 0.5;
      }
      
      .shade4{
        opacity: 0.5;
      }
      
      .shade5{
        opacity: 0.5;
      }
      
      @keyframes scaleIn {
        0% {
          transform: scale(0.1);
          opacity: 0.7;
        }
       
        50% {
          transform: scale(1);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
      }
      
      @media only screen and (min-width: 768px) {
          img {
            max-height: 500vh;
            width: 50%;
            margin-top: 20em;
          }
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
          .title img {
            width: 50%;
            height: 50%;
            margin: 30em;
            position: relative;
            z-index: 3;
          }
          .animatedBG {
            overflow: hidden;
            width: 150%;
            margin-left: 12em;
            margin-top: 8em;
            height: 100em;
            z-index: 2;
          }
          .background img {
            width: 150%;
            height: 120%;
          }
          @media only screen and (min-width: 1200px) {
            .background img {
              min-height: 100vh;
            }
      @media only screen and (min-width: 1680px) {
          img {
            max-height: 100%;
          }
          .background img {
            height: 100%;
          }
        }
      }
    }
    `}</style>
  </div>
);

export default PlusImage;
