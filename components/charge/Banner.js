const Banner = () =>
  <div className='banner'>
    <iframe src='https://player.vimeo.com/video/344801026'
      frameBorder='0'
      allow='autoplay; fullscreen'
      allowFullScreen
      title='Banner video'
    />
    <style jsx>{`
      .banner {
        display: grid;
        position: relative;
      }
      .banner iframe {
        width: 100%;
        height: 56vw;
      }
    `}</style>
  </div>

export default Banner
