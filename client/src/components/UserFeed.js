/*jshint esversion: 6 */
import React, { Component } from 'react';
import { verifyToken } from '../actions/auth';
import { connect } from 'react-redux';
import axios from 'axios';
import PostForm from './PostForm';
import PostEdit from './PostEdit';
import PostComment from './PostComment';
import PostLikes from './PostLikes';
import {
  Accordion,
  Modal,
  Header,
  Feed,
  Image,
  Segment,
  Dimmer,
  Loader,
  Icon,
  Divider,
  Button,
} from 'semantic-ui-react';
import { setHeaders } from '../actions/headers';
import { setFlash } from '../actions/flash';

class UserFeed extends Component {
  state = { posts: [], editPost: null }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get('/api/posts')
      .then(res => {
        const { data } = res;
        const posts = JSON.parse(res.data.res)
        this.setState({ posts: posts.included }
      )}
    )
    .catch(res => {
      console.log(res)
    })
  }

  // potential func that wont let you edit other users posts
  // setUsers = (user) => {
    //   const users = this.state.users.map(u => {
      //     if(user.id === u.id)
      //       return user
      //     return u
      //   })
      //   this.setState({users, editPost: null})
      // }

  areYouSure = (id) => {
    return(
      <Modal
        closeIcon={
            <Button
              size={'large'}
              style={{backgroundColor: 'white'}} 
              onClick={() => this.setState({ editPost: null })} 
              floated='right'
            >
              <Icon button color='black' name='close'/>
            </Button>
        }
        trigger={ <Icon button color='black' name='remove circle'/>}
        size={'mini'}
      >
        <Modal.Header>
          Remove Post
        </Modal.Header>
        
        <Modal.Content>
          <p>Are you sure you would like to delete this post?</p>
        </Modal.Content>

        <Modal.Actions>
          <Button negative onClick={() => this.postDestroy(id)}>I'm sure, Delete!</Button>
        </Modal.Actions>
      
      </Modal>
    )
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  postDestroy = (id) => {
    const {dispatch} = this.props;
    axios.delete('/api/posts')
      .then(res => {
        this.setState({ posts: res.data })
        dispatch(setHeaders(res.headers))
      })
      .catch(res => {
        dispatch(setFlash('Error deleting post', 'red'))
        dispatch(setHeaders(res.headers))
      })
  }

  setEditPost = (editPost) => {
    this.setState({ editPost });
  }

  setDestroyPost = (areYouSure) => {
    this.setState({ areYouSure })
  }

  destoryPostButton(id) {
    // if (this.props.post.id !== id)
      // return(
        // <Icon button color='red' name='remove circle' onClick={() => this.postDestroy(id)} />
    // )
  }

  // Post List values:
  // post id = post.id
  // post content = post.attributes.text
  
  listPosts = (id) => {
    return this.state.posts.map( post =>
      <Segment key={post.id}>
        <Feed.Event>
          <div style={{ display: 'flex', }}>
            <div>
              <div>
                <Image
                  src={require('../assets/images/teamimg1.png')}
                  style={{ paddingRight: '15px', }}
                  />
              </div>
            </div>

            <div style={{ display: 'flex', }}>
              <div>
                <div style={{ display: 'flex', paddingBottom: '1vh',}}>
                  <Feed.Label>
                    //TODO: User Name Here
                  </Feed.Label>
                </div>

                <div style={{ display: 'flex', }}>
                  <Feed.Content>
                    <Feed.Date style={{fontSize: '75%', color: '#8f8f8f'}}>
                      //TODO: Real TimeStamp Here
                    </Feed.Date>
                    <Feed.Extra text style={{paddingBottom:'1vh', color: '#333333'}}>
                      {post.attributes.text}
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <div style={{ display: 'flex', }}>
                          <div style={styles.Likes_comments}>
                            <PostComment />
                          </div>
                          <div style={styles.Likes_comments}>
                            <PostLikes />
                          </div>
                          <div>
                            <Icon button color='black' name='edit' onClick={() => this.setEditPost(post)} />
                            {this.areYouSure(id)}
                          </div>
                        </div>
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </div>
              </div>
            </div>
          </div>
          <Divider style={{width: '100%', color: '#8f8f8f'}}/>
        </Feed.Event>
      </Segment>
    );
  }


  render() {
    const { posts, editPost } = this.state;
    if (posts) {
      return (
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignContent: 'center', 
            justifyContent: 'center'
          }}>
          <div 
            style={{
              display: 'flex', 
              alignContent: 'center', 
              justifyContent: 'center'
            }}>
          </div>
          <div style={{padding: '30px'}}>
            <PostForm />
            <Feed>
              {this.listPosts(posts)}
              <PostEdit
                editPost={editPost}
                setEditPost={this.editPost}
              />
            </Feed>
          </div>
        </div>
      );
    } else {
      return (
        <Segment basic>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

const mapStateToProps = state => {
  return { post: state.post };
}

const styles = {
  Likes_comments: {
    display: 'inline-flex', 
    paddingRight: '1vw', 
    fontSize: '75%', 
    color: '#8f8f8f',
  }
}

export default connect(mapStateToProps)(UserFeed);
