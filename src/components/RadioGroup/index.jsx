import React, { useState } from 'react'
import './styles.css'
import RadioInput from '../RadioInput'

const RadioGroup = (props) => {
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
                checked={props.value === input.value}
            />
                )}
        </div>
    )
}

export default RadioGroup