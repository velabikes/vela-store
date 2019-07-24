const SectionHeader = ({ title, tagline }) =>
  <header className='SectionHeader'>
    <h1>{title}</h1>
    {tagline && <p>{tagline}</p>}
    <style jsx>{`
      .SectionHeader {
        margin-bottom: 3rem;
      }
      h1 {
        margin-bottom: 0;
      }
      p {
        font-size: 1.25rem;
      }
    `}</style>
  </header>

export default SectionHeader
