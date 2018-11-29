import React from 'react'
import PropTypes from 'prop-types'

export default function TextInput(props) {
 
  const { 
    name,
    type = "text",
    label, 
    placeholder, 
    required = (props.required) ? "required" : null, 
    minLength = 0, 
    maxLenght = 128,
    min, 
    max,
    value = '',
    onChange 
  } = props

  return (
    <div className="form-input">
      <label htmlFor={name} >{label}</label>
      <input 
        type={type}
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
        minLength={minLength} 
        maxLength={maxLenght}
        min={min}
        max={max}
        required={required}
      />
      <div className="error-message"></div>
    </div>
  )
}
  
TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}