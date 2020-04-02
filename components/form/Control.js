import { velaBlue, white } from 'style/colors'
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
          font-size: 0.8em;
          font-weight: 600;
          border-radius: 0.6em;
          transition: 0.5s;
          min-width: 30%;
          max-width: 30%;
          margin: 0.3em 0.6em 0.3em 0;
          cursor: pointer;
          color: ${midGray};
          background-color: ${white};
          box-shadow: 0 2px 3px rgba(0,0,0,0.03), 0 2px 3px rgba(0,0,0,0.03);
          padding: 1.5em;
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
          border-radius: 2em;
          text-align: center;
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
