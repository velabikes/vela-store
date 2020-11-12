const HomeVideo = () =>
  <div className='banner'>
    <iframe src='/static/VelaBikesSmartbikeArtesanal.mp4'
      frameBorder='0'
      allow='autoplay; fullscreen; loop'
      allowFullScreen
      title='Banner video'
    />
    <style jsx>{`
      .banner {
        margin-top: -3.5em;
        display: grid;
        position: relative;
        z-index: 0;
      }
      .banner iframe {
        width: 100%;
        height: 56vw;
      }
    `}</style>
  </div>

export default HomeVideo