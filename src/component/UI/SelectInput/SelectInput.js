import React from 'react'

const selectInput = (props) => {
  const options = props.data.values.map((item, index) => {
      return <option key={props.data.name + index} value={item}>{item}</option>
  })
  return (
    <div className="input-field col s7">
     <select onChange={props.onChangeHandler} name={props.data.name}>
        <option value="No state selected">Select Value</option>
        {options}
     </select>
     <label>{props.data.label}</label>
   </div>
  )
}

export default selectInput
