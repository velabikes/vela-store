import { velaBlue, offWhite } from 'style/colors'
import PropTypes from 'prop-types'

const Control = ({ field, options }) => {
  const { value, onChange, name } = field
  const setValue = onChange(name)
  const renderOption = option =>
    <div onClick={() => setValue(option)} onKeyDown={() => setValue(option)} >
      {option}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          font-weight: 600;
          border-radius: 1em;
          text-align: center;
          transition: 1s;
          min-width: 45%;
          max-width: 45%;
          margin: 0.2em;
          background-color: ${offWhite};
          padding: 1em;
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
          display: flex;
          margin: 0.5em 0;
          flex-wrap: wrap;
          border-radius: 2em;
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
