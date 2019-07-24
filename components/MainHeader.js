const MainHeader = ({ title, tagline }) =>
  <header className='MainHeader'>
    <h1>{title}</h1>
    {tagline && <p>{tagline}</p>}
    <style jsx>{`
      .MainHeader {
        margin-bottom: 2rem;
      }
      h1 {
        margin-bottom: 0;
      }
      p {
        font-size: 1.25rem;
      }
    `}</style>
  </header>

export default MainHeader
