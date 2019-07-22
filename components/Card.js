const Card = ({children}) =>
  <div className='Card'>
    {children}
    <style jsx>{`
      .Card {
        padding: 2rem;
        box-shadow: 0px 18px 10px -18px rgba(100,100,100, 0.6);
      }
    `}</style>
  </div>

export default Card
