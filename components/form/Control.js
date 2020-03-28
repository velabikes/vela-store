import { velaBlue, midGray } from 'style/colors'
import PropTypes from 'prop-types'

const Control = ({ field, options }) => {
  const { value, onChange, name } = field
  const setValue = onChange(name)
  const renderOption = option =>
    <div onClick={() => setValue(option)} onKeyDown={() => setValue(option)} role='button' tabIndex={0}>
      {option}
      <style jsx>{`
        div {
          flex: 1;
          padding: 0.8em;
          border-radius: 2em;
          font-weight: 600;
          text-align: center;
          transition: 1s;
          ${value === option && `
          color: white;
          background-color: ${velaBlue}
        `}
      `}</style>
    </div>

  return (
    <div>
      {options.map(renderOption)}
      <style jsx>{`
        div {
          border-radius: 2em;
          border: 1px solid ${midGray};
          display: flex;
          color: ${midGray};
        }

      `}</style>
    </div>
  )
}

Control.propTypes = {
  field: PropTypes.any,
  options: PropTypes.any
}

export default Control
