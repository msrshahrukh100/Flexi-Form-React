import React from 'react'
import TextArea from '../../component/UI/TextArea/TextArea'
import Flexi from '../../component/Flexi/Flexi'

class Dashboard extends React.Component {

  state = {
    flexiConfig: {
        items: [
          {
            "name": "person_name",
            "label": "Person's Name",
            "type": "TextField",
          },
          {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
               "Maharashtra",
               "Kerala",
               "Tamil Nadu"
            ]
          }
        ]
      }
    }

    onFlexiSubmit = (data) => {
      alert(data)
    }


  render() {
    return (
      <>
        <nav>
           <div className="nav-wrapper">
             <a href="/" className="brand-logo center">Flexi Form</a>
           </div>
         </nav>
        <div className="container">
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col s9">
              <Flexi onSubmit={this.onFlexiSubmit} config={this.state.flexiConfig} />
            </div>
            <div className="col s3">
              <TextArea config={this.state.flexiConfig} onConfigChange={this.configChangeHandler} />
            </div>
          </div>
        </div>
      </>
    )

  }
}

export default Dashboard
