import React from 'react'

const RadioInput = (props) => {
    return (
            <label>
                <input
                    type="radio"
                    value={props.value}
                    checked={props.checked}
                    onChange={props.onChange}
                    name={props.name}
                />
                {props.label}
            </label>
    )
}

export default RadioInput