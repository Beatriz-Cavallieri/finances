import React, { useState } from 'react'
import './styles.css'
import RadioInput from '../RadioInput'

const RadioGroup = (props) => {
    const [checkedOption, setCheckedOption] = useState(undefined)
    return (
        <div className='radioGroupWrapper'>
            <label>{props.label}</label>
            {props.inputs.map(input => <RadioInput
                key= {input.label}
                value={input.value}
                label={input.label}
                name={props.name}
                id={props.name}
                onChange={props.onChange}
            />
                )}
        </div>
    )
}

export default RadioGroup