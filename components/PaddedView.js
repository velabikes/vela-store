const PaddedView = props =>
  <div {...props}>
    {props.children}
    <style jsx>{`
      div {
        padding: 0 1em;
      }
      @media only screen and (min-width: 1024px) {
        div {
          max-width: 1024px;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>

export default PaddedView
