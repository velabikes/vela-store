const Tag = ({label, selected, ...props}) =>
  <span {...props}>
    {label}
    <style jsx>{`
      span {
        background: lightgray;
        font-size: 0.75em;
        font-weight: 500;
        border-radius: 1em;
        padding: 0.5em 1em;
        margin-right: 0.75rem;
        display: inline-block;
        ${selected && 'box-shadow: 0 0 0 2px green;'}
      }
      span:last-child {
        margin-right: 0;
      }
    `}</style>
  </span>

export default Tag
