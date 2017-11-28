import React, { Component } from 'react';
import { Modal, Form, Input, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import axios from 'axios';

class PostEdit extends Component {
  state = { editPost: { ...this.props.post } }

  editPost(id) {
    const { dispatch } = this.props;
    axios.put('/api/posts')
    .then(res => {
      this.props.setPosts(res.data)
    })
    .catch(res => {
      dispatch(setFlash('Error editing post', 'red'))
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target
    this.setState({ editPost: {...this.state.editPost, [id]: value }})
  }

  render() {
    if(this.state.editPost) {
      const { post, id } = this.state.editPost
      return(
        <Modal
        closeIcon={<Button onClick={() => this.setState({ editPost: null })} floated='right' compact tiny>X</Button>}
        open={ this.props.editPost ? true : false }
        >
          <Modal.Header>Edit Post</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => this.editPost(id) }>
              <Form.Field>
                <label>Edit Post</label>
                <input value={post} id='post' onChange={this.handleChange} autoFocus />
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