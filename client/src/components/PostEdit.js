import React, { Component } from 'react';
import { Modal, Form, Input, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import axios from 'axios';

class PostEdit extends Component {
  state = { editPost: { ...this.props.post } }

  editPost = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { message } = this.state;
    axios.post('/api/posts', { message })
    .then(res => {
      // this.props.setPosts(res.data)
      dispatch(setHeaders(res.headers))      
    })
    .catch(res => {
      dispatch(setFlash('Error editing post', 'red'))
      dispatch(setHeaders(res.headers))      
    })
  }

  // editPost(id) {
  //   const { dispatch } = this.props;
  //   const { message } = this.state;
  //   axios.put('/api/posts', { message })
  //   .then(res => {
  //     this.props.setPosts(res.data)
  //     dispatch(setHeaders(res.headers))      
  //   })
  //   .catch(res => {
  //     dispatch(setFlash('Error editing post', 'red'))
  //     dispatch(setHeaders(res.headers))      
  //   })
  // }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   const { id, value } = e.target
  //   this.setState({ editPost: {...this.state.editPost, [id]: value }})
  // }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {
    if(this.state.editPost) {
      const { post, id, message } = this.state.editPost
      return(
        <Modal
          closeIcon={
            <Button 
              onClick={() => this.setState({ editPost: null })} 
              floated='right' 
              compact 
              tiny
            >X
            </Button>
          }
          open={ this.props.editPost ? true : false }
        >
          <Modal.Header>Edit Post</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => this.editPost(id) }>
              <Form.Field>
                <label>Edit Post</label>
                <input value={this.state.message} id='message' onChange={this.handleChange} autoFocus />
              </Form.Field>
              <Button editPost>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      )
    } else
      return null
  }
}

export default PostEdit;