/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

class Photos extends Component {
  state = { photos: [] }
  
  componentDidMount() {
    // this.getPhotos();
  }

  // getPhotos = () => {
  //   axios.get('/api/posts')
  //     .then(res => {
  //       const { data } = res;
  //       const photos = JSON.parse(res.data.res)
  //       this.setState({ photos: photos.included })
  //     });
  // }

  render() {
    return (
      <Header as='h1' textAlign='center'>Photos Component</Header>
    );
  }
}

export default connect()(Photos);