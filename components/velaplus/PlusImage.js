const PlusImage = () => (
  <div className="root">
    <div className="limiter">
      <img className="title" src="/plus/new_vplus.png" alt="Title" />
      <h1 className="text1">
        Agora com AirTag ou SmartTag integrados à sua Vela.
      </h1>
      <h2 className="text2">Compatível com a Vela 1, Vela S e Vela 2.</h2>
      <img className="tags" src="/plus/Tags.gif" alt="Tags" />
      <img
        className="bike1"
        src="/plus/Main_bike_desktop.png"
        alt="Assinatura Segurança Bike Elétrica"
      />
      <img
        src="/plus/main_mobile.gif"
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
    </div>

    <style jsx>{`
      .root {
      background-image: url("/plus/BG_Vplus.png");
      width: 100%;

      }

      .limiter {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bike1 {
        max-width: 60em;
        z-index: 3;
      }

      .tags {
        max-width: 300px;
        margin-top: 3em;
        z-index: 3;
      }
      
      .title {
        width: 338px;
        height: auto;
            margin-top: 5em;
      }

      .animatedBG, .circle {
        background-color: #D6451;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
 
      .desktop {
        display: none;
      }
      .animatedBG {
        position: absolute;
        margin-top: 43em;
        margin-left 12em;
        width: 30px;
        height: 30px;
        z-index: 1; 
      }
      .circle{
        position: absolute;
        border-radius: 50%;
        background: #8acca8;
        animation: scaleIn 2.1s infinite;
        box-shadow: 0px 0px 1px 0px #B2F1FF;
      }

      .text1 {
        margin-top: 2em;
        font-size: 25px;
        font-weight: 400;
      }

      .text2 {
        margin-top: 0.2em;
        font-size: 18px;
        font-weight: 300;
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
        
          .mobile {
            display: none;
          }
          .desktop {
            display: initial;
          }
    

          .
 
     
    }
    `}</style>
  </div>
);

export default PlusImage;
