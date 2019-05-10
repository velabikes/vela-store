const HomePage = () =>
  <div className='HomePage'>
    <img src='http://velabikes.com.br/themes/custom/velatheme/img/Banner-low-azul-60.jpg' alt='' />
    <div className='cta'>
      <h1>Vá de Vela</h1>
      <h5>Algum texto eletrica</h5>
      <button>Compre a sua</button>
    </div>
    <style jsx>{`
      img {
        height: 100vh;
        object-fit: cover;
        width: 100%;
      }
      .cta {
        position: absolute;
        text-align: right;
        top: calc(5% + 10px);
        right: calc(5% + 20px);
      }
    `}</style>
  </div>

export default HomePage
