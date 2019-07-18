const Section = ({ children }) =>
  <section>
    {children}
    <style jsx>{`
      section {
        padding: 2rem 0
      }
    `}</style>
  </section>

export default Section
