import React, {useState} from 'react'

const Checkbox = props => {
    const [checked, setChecked] = useState(false)
    return(
    <>
        <input 
            type="checkbox"
            value={checked}
            onChange={() => setChecked(checked => !checked)}
            {...props}
        />
    </>
  )
}

export default Checkbox