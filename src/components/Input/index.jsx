import React, {useState} from 'react'
import './styles.css'
import { formatCurrency } from '../../functions/formatCurrency'

const Input = (props) => {
  const [formattedValue, setFormattedValue] = useState('0,00')
  const handleNumber = (value) => {
  //   const numericValue = parseFloat(value.replace(/[^\d]/g, '')) / 100
  // }
  // if (!isNaN(numericValue)) {
  //   const formatted = formatCurrency(numericValue)

  //   setFormattedValue(formatted)
  }

  const handleChange = (event) => {
    if (props.type = "number") handleNumber(event.target.value)
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