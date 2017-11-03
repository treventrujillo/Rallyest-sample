import React, { Component } from 'react';
import {
   Header,
   Grid,
   Container,
   Segment,
   } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
    <Container>
      <Grid width={2}>
        <Grid.Column>
          <Segment basic>
            <Header as='h1'>Where Commnunity &<br />Recovery Meets</Header>
          </Segment>    
        </Grid.Column> 
        <Grid.Column>
        
        </Grid.Column> 
      </Grid>
    </Container>
    );
  }
}

export default Home;
