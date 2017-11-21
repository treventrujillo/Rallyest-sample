import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Form, Modal, Button } from 'semantic-ui-react';

class LabelForm extends Component {
  state = { name: '' }

  onChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    axios.post('api/labels', name)
      .then(res => {
        debugger
      })
  }

  render() {
    return (
        <Modal trigger={<Button>Create Label</Button>}>
          <Modal.Content>
            <Modal.Header>Create a Label</Modal.Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Label>Label Name</Form.Label>
                <Form.Input placeholder="Enter name here..." onChange={this.handleChange} value={this.state.name} />
              </Form.Field>
              <Form.Button type='submit'>Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
    )
  }
}

export default connect()(LabelForm);