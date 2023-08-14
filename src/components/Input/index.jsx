import React from 'react'
import './styles.css'

const Input = (props) => {
  
  const handleChange = (event) => {
    props.onChange(event)
  }

  return (
    <div className='inputWrapper'>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
        required={props.required}
        {...props}
      />
    </div>
  )
}

export default Input