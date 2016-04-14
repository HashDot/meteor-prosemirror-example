import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Documents } from '../api/documents.js'
import Editor from './Editor'

class App extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.docs &&
          <Editor doc={ this.props.docs[0] } />
        }
      </div>
    )
  }
}

App.propTypes = {
  doc: PropTypes.object
}

export default createContainer(() => {
  return {
    docs: Documents.find({}).fetch()
  }
}, App)
