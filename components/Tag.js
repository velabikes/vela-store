import { offWhite, lightGray, velaBlue } from 'style/colors'

const Tag = ({label, icon, selected, onClick, ...props}) =>
  <span
    className='Tag'
    onClick={onClick}
    {...props}
  >
    {icon && <span className='icon'>{icon}</span>}
    <span className='label'>{label}</span>
    <style jsx>{`
      .Tag {
        background: ${lightGray};
        position: relative;
        font-size: 0.8125em;
        font-weight: 500;
        border-radius: 2em;
        padding: 0.5em 1em;
        margin-right: 0.75rem;
        display: inline-block;
        transition: .2s box-shadow ease-in;
        ${selected ? `box-shadow: 0 0 0 2px ${velaBlue};` : ''}
        ${onClick ? 'cursor: pointer;' : ''}
      }
      .Tag:last-child {
        margin-right: 0;
      }
      .icon {
        padding-left: .25em;
      }
      .icon > :global(*) {
        font-size: 1.25em;
        position: absolute;
        left: 0.375em; top: 0.375em;
      }
      .label {
        padding-left: .75em;
        //font-size: 0px;
      }
    `}</style>
  </span>

export default Tag
