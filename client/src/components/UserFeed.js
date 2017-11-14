/*jshint esversion: 6 */
import React, { Component } from 'react';
import { verifyToken } from '../actions/auth';
import { connect } from 'react-redux';
import axios from 'axios';
import {
   Header,
   Feed,
   Image,
   Segment,
   Dimmer,
   Loader,
  } from 'semantic-ui-react';

class UserFeed extends Component {
  state = { posts: [] }

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
  }


  // Post List values:
  // post id = post.id
  // post content = post.attributes.text

  listPosts = (posts) => {
    return posts.map( post =>
      <Segment>
        <Feed.Event key={post.id}>
          <div style={{display: 'flex'}}>
            <div style={{display:'flex', paddingLeft: '5px', paddingRight: '15px',}}>
              <Image src={require('../assets/images/teamimg1.png')}/>
            </div>

            <div style={{display: 'flex',}}>
              <div>

                <div style={{display: 'flex',}}>
                  <Feed.Label>
                    USER NAME
                  </Feed.Label>
                </div>

                <div style={{display: 'flex',}}>
                  <Feed.Content>
                    <p>{post.attributes.text}</p>
                  </Feed.Content>
                </div>

              </div>
            </div>
          </div>
        </Feed.Event>
      </Segment>
    );
  }

  render() {
    const { posts } = this.state;
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
            <Header as='h1' style={{paddingTop: '15px'}}>Whats New?</Header>
          </div>
          <div style={{padding: '30px'}}>
            <Feed>
              {this.listPosts(posts)}
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

export default connect()(UserFeed);
