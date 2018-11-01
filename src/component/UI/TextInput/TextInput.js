import React from 'react'

const textInput = (props) => {
  return (
    <div className="input-field col s7">
      <input onChange={props.onChangeHandler} type="text" name={props.data.name} />
      <label>{props.data.label}</label>
    </div>
  )
}

export default textInput
