import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';

import { Form, Modal, Button } from 'semantic-ui-react';

class PostForm extends Component { 
  state = { open: false, message: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { message } = this.state;
    axios.post('/api/posts', { message })
      .then(res => {
        dispatch(setFlash('Post Successfully Created!', 'green'))
      })
      .catch(res => {
        dispatch(setFlash('Post failed to create', 'red'))
      });
    this.resetForm();
  }

  handleTextChange = (e) => {
    this.setState({ message: e.target.value })
  }

  resetForm = () => {
    this.setState({ message: '', open: false })
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render () {
    const { open } = this.state;
    return (
      <Modal trigger={
        <Button onClick={() => this.toggleOpen()}>Create Post</Button>} open={open}>
        <Modal.Content>
          <Modal.Header>Create a Post</Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input placeholder="What's on your mind?" onChange={this.handleTextChange} value={this.state.message} />
            </Form.Field>
            <Form.Button type='submit'>Submit</Form.Button>
          </Form>
          <Button onClick={() => this.toggleOpen()}>Cancel</Button>
        </Modal.Content>
      </Modal>
    );
    }
  }
    
export default connect()(PostForm);