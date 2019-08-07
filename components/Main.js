const Main = ({ children }) =>
  <main className='Main'>
    {children}
    <style jsx>{`
      main {
        padding: 1.5rem 0
      }
    `}</style>
  </main>

export default Main
