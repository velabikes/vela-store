import { velaGreen } from "../../style/colors"

const BFImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSegurancaBikeEletrica.png?alt=media&token=8a5011f9-bbda-4f4f-9a82-431ddc678dda' className='desktop' alt='Black Friday 2020 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSeguran%C3%A7aBikeEletricaGPS.png?alt=media&token=ecece5f5-6eae-4627-9253-1d3f137a3edd' className='mobile' alt='Black Friday 2020 - Vela Bikes' />
    <div className='animatedBG'>
      <div className='circle xxlarge shade1'></div>
      <div className='circle xlarge shade2'></div>
      <div className='circle large shade3'></div>
      <div className='circle medium shade4'></div>
      <div className='circle small shade5'></div>
      <div className='circle xsmall shade5'></div>
    </div>
    <style jsx>{`
      div {
        background-color: #FFFEFE;
        margin-top: 3em;
        height: auto;
        display: flex;;
        align-items: center;
        justify-content: center;
      }
      img {
        object-fit: cover;
        z-index: 3;
      }
      .desktop {
        display: none;
      }
      .animatedBG {
        width: 100vw;
        height: 90vh;
        overflow: hidden;
        position: absolute;
      }
      .circle{
        position: absolute;
        border-radius: 50%;
        background: #FFEDA6;
        animation: scaleIn 5s infinite;
        box-shadow: 0px 0px 1px 0px #B7F0D9;
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
            max-height: 70%;
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
      @media only screen and (min-width: 1680px) {
          img {
            max-height: 70%;
          }
        }
      }
    }
    `}</style>
  </div>

export default BFImage
