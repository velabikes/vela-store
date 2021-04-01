const HomeVideo = () =>
  <div className='banner'>
    <video loop autoPlay muted playsInline> 
      <source src='/static/VelaBikesSmartbikeArtesanal.mp4' type='video/mp4' />  
    </video>
    <style jsx>{`
      .banner {
        display: grid;
        position: relative;
        z-index: 0;
      }
      .banner video {
        width: 100%;
        height: 50vh;
        object-fit: cover;
      }

      @media only screen and (min-width: 768px) {
        .banner {
          width: 100%;
        }
        .banner video {
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }  
      }
    `}</style>
  </div>

export default HomeVideo