const Section = ({ children }) =>
  <section className='Section'>
    {children}
    <style jsx>{`
      section {
        padding: 3rem 0;
      }
    `}</style>
  </section>

export default Section
