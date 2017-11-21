import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';
import { setFlash } from '../actions/flash';

import { Form, Modal, Button } from 'semantic-ui-react';

class LabelForm extends Component {
  state = { name: '', open: false }

  onChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    const { name } = this.state;
    axios.post('api/labels', { name })
      .then(res => {
        dispatch(setHeaders(res.headers))
        dispatch(setFlash('Label successfully created', 'green'))
      })
      .catch(res => {
        dispatch(setFlash('Label failed to create', 'red'))
      });
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      open: false,
    })
  }

  deleteLabel = (id) => {
    const { labels } = this.state;
    const { dispatch } = this.props;
    axios.delete(`/api/labels/${id}`)
      .then(res => {
        dispatch(setFlash('Label deleted', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label failed to delete', 'red'))
      });
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <Modal trigger={<Button onClick={() => this.toggleOpen()}>Create Label</Button>} open={open}>
        <Modal.Content>
          <Modal.Header>Create a Label</Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
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