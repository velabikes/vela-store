const Banner = () =>
  <div className='banner'>
    <video loop autoPlay muted> 
      <source src='/static/charge-banner.mp4' type='video/mp4' />  
    </video>
    <style jsx>{`
      .banner {
        margin-top: -3.5em;
        display: grid;
        position: relative;
        z-index: 0;
      }
      .banner video {
        width: 100%;
        height: 60vh;
        object-fit: cover;
      }

      @media only screen and (min-width: 768px) {
        .banner video {
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }  
      }
    `}</style>
  </div>

export default Banner