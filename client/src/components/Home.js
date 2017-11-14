/*jshint esversion: 6 */
import React, { Component } from 'react';
import {
   Header,
   Grid,
   Container,
   Segment,
   } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <Container>
      <Grid>
        <Grid.Column>
          <Segment basic>
            <Header as='h1'>Where Commnunity &<br/>Recovery Meet</Header>
          </Segment>
        </Grid.Column>
        <Grid.Column>
        <Link to='/Login'>Login</Link>
        </Grid.Column> 
      </Grid>
    </Container>
    );
  }
}

export default Home;
