
const Control = ({ field, options }) => {
  const { value, onChange, name } = field
  const setValue = onChange(name)
  const renderOption = option =>
    <div onClick={() => setValue(option)}>
      {option}
      <style jsx>{`
        div {
          flex: 1;
          text-align: center;
          ${value === option && `
            background-color: red;
            color: white;
          `}
        }
      `}</style>
    </div>

  return (
    <div>
      {options.map(renderOption)}
      <style jsx>{`
        div {
          border: 1px solid red;
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default Control
