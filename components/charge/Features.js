import { velaRed, velaGreen, velaBlue, offBlack } from '../../style/colors'
const Features = () =>
  <div className='features'>
    <div className='icon'>
      <div className='image rota'>
        <img src='static/rota.png'/>
      </div>
      <p>Rota de</p>
      <p>ciclistas</p>
    </div>

    <div className='icon'>
      <div className='image clientes'>
        <img src='static/clientes.png'/>
      </div>
      <p>Clientes</p>
      <p>potenciais</p>
    </div>

    <div className='icon'>
      <div className='image site'>
        <img src='static/site.png'/>
      </div>
      <p>Divulgação</p>
      <p>no site</p>
    </div>
    
    <style jsx>{`
      .features {
        display: grid;
        position: relative;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 6rem 20rem;
        text-align: center;
      }
      .icon {
        margin: 0 auto;
      }
      .image.rota {
        background-color: ${velaRed};
      }
      .image.clientes {
        background-color: ${offBlack};
      }
      .image.site {
        background-color: ${velaBlue};
      }
      .image img {
        width: 7rem;
        height: auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      .features .image {
        width: 10rem;
        height: 10rem;
        border-radius: 5px;
        margin-bottom: 1rem;
      }
      .icon p {
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-style: italic;
        line-height: 1;
      }
    `}</style>
  </div>

export default Features
