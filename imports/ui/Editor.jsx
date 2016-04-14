import React, { Component, PropTypes } from 'react';
import { Documents } from '../api/documents.js';
import ProseMirror from 'react-prosemirror'
import 'prosemirror/dist/menu/menubar'
import 'prosemirror/dist/menu/tooltipmenu'
import 'prosemirror/dist/menu/menu'

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'Hello World!'
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.doc.content })
  }

  onChange(value) {
    const { doc } = this.props
    this.setState({ value })
    Documents.update( { _id: doc._id }, { $set: { content: value } } )
  }

  render() {
    const { doc } = this.props
    //console.log(doc)
    return (
      <ProseMirror value={ this.state.value } onChange={ this.onChange.bind(this) } options={ { menuBar: true, tooltipMenu: true, autoInput: true, docFormat: 'html' } } />
    )
  }
}

Editor.propTypes = {
  doc: PropTypes.object
}

export default Editor
