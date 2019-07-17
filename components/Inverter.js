import {offBlack} from 'style/colors'

const Inverter = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: ${offBlack};
        color: white;
      }
      div :global(h1),
      div :global(h2),
      div :global(h3),
      div :global(h4),
      div :global(h5),
      div :global(h6) {
        color: white;
      }
    `}</style>
  </div>

export default Inverter

