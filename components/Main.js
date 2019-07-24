const Main = ({ children }) =>
  <main className='Main'>
    {children}
    <style jsx>{`
      main {
        padding: 1rem 0
      }
    `}</style>
  </main>

export default Main
