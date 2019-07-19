import { offWhite, lightGray, velaBlue } from 'style/colors'

const Tag = ({label, selected, onClick, ...props}) =>
  <span
    className='Tag'
    onClick={onClick}
    {...props}
  >
    {JSON.stringify(onClick)}
    {label}
    <style jsx>{`
      span {
        background: ${lightGray};
        font-size: 0.8125em;
        font-weight: 500;
        border-radius: 1em;
        padding: 0.5em 1em;
        margin-right: 0.75rem;
        display: inline-block;
        transition: .2s box-shadow ease-in;
        ${selected ? `box-shadow: 0 0 0 2px ${velaBlue};` : ''}
        ${onClick ? 'cursor: pointer;' : ''}
      }
      span:last-child {
        margin-right: 0;
      }
    `}</style>
  </span>

export default Tag
