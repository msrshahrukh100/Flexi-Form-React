import React from 'react'
import TextInput from '../UI/TextInput/TextInput'
import SelectInput from '../UI/SelectInput/SelectInput'

class Flexi extends React.Component {

  state = {
    formData: {}
  }

  submitFormHandler = () => {
    this.props.onSubmit(JSON.stringify(this.state.formData))
  }

  valueChangeHandler = (event) => {
    console.log(event.target.name)
    let newData = this.state.formData
    newData[event.target.name] = event.target.value
    this.setState({
      formData: newData
    })
  }

  render() {

    const inputItems = this.props.config.items.map((item, index) => {
      switch(item.type) {
        case 'TextField':
          return <TextInput key={index} data={item} onChangeHandler={this.valueChangeHandler} />
        case 'DropDown':
          return <SelectInput key={index} data={item} onChangeHandler={this.valueChangeHandler} />
        default:
          return null
      }
    })

    return (
      <>
        <div className="row">
          {inputItems}
          <br/>
        </div>
        <button onClick={this.submitFormHandler} className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </>
    )
  }

}

export default Flexi
