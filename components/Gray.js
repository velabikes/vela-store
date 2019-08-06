import {lightGray} from 'style/colors'

const Gray = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div :global(.Card) {
        background-color: ${lightGray};
      }
      div :global(.PaddedView) {
        background-color: ${lightGray};
      }
    `}</style>
  </div>

export default Gray

