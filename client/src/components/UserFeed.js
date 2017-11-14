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
   Icon,
   Divider,
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
        <Feed.Event key={ post.id }>
          <div style={{ display: 'flex', }}>
            <div style={{ width: '5%' }}>
              <div>
                <Image 
                  src={require('../assets/images/teamimg1.png')} 
                  style={{width: 'auto', height: '100%'}}/>
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
                          <div style={{ display: 'flex', paddingRight: '1vw', fontSize: '75%', color: '#8f8f8f'}}>
                            <Icon name='like' />
                            //TODO: Add Likes Functionality
                          </div>
                          <div style={{ display: 'flex', paddingRight: '1vw', fontSize: '75%', color: '#8f8f8f'}}>
                            <Icon name='comment' />
                            //TODO: Add Likes Functionality
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
