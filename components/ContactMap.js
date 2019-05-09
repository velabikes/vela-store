const ContactMap = () =>
  <div className='ContactMap'>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BvUNdjNevF8liSHUWb7KXOmKoUczDneE" width="640" height="480"></iframe>
    <style jsx>{`
      div {
        position: relative;
        overflow: hidden;
        padding-top: 40%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}</style>
  </div>

export default ContactMap
