import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class TourBox extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <div>
        <div>
          
        </div>
        <div>
          <Segment.Group horizontal>
            <Segment>Skip</Segment>
            <Segment>...</Segment>
            <Segment>Next</Segment>
          </Segment.Group>
        </div>
      </div>
    )
  }
}


export default TourBox;