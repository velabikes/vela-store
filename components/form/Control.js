import { velaBlue, offWhite } from 'style/colors'
import PropTypes from 'prop-types'
import { midGray } from '../../style/colors'

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
          justify-content: center;
          font-size: 1em;
          font-weight: 600;
          border-radius: 0.6em;
          transition: 0.5s;
          font-size: 0.8em;
          min-width: 45%;
          max-width: 45%;
          margin: 0.3em 0.6em 0.3em 0;
          cursor: pointer;
          color: ${midGray};
          background-color: ${offWhite};
          padding: 1em;
          ${value === option && `
          color: white;
          cursor: default;
          background-color: ${velaBlue};
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
