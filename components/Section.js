const Section = ({ children }) =>
  <section className='Section'>
    {children}
    <style jsx>{`
      section {
        padding: 3rem 3rem;
      }
    `}</style>
  </section>

export default Section
