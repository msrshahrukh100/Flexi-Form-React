import React from 'react'

const textArea = (props) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea disabled defaultValue={JSON.stringify(props.config)}  className="materialize-textarea"></textarea>
            <label htmlFor="textarea1">Value of Flexi Config</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default textArea
