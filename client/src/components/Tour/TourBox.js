import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class TourBox extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <div style={styles.boxContainer}>
        <div style={styles.blueBox}>
          stuff goes here
        </div>
        <div style={styles.buttonBar}>
          {/* TODO: links added */}
          <Segment.Group horizontal style={styles.buttonBar}>
            <Segment>Skip</Segment>
              <Segment>
                <Link to={'/Tour_1'}><Icon name='circle' size='tiny' style={{paddingLeft: '5px', paddingRight: '5px'}}/></Link>
                <Link to={'/Tour_2'}><Icon name='circle' size='tiny' style={{paddingLeft: '5px', paddingRight: '5px'}}/></Link>
                <Link to={'/Tour_3'}><Icon name='circle' size='tiny' style={{paddingLeft: '5px', paddingRight: '5px'}}/></Link>
              </Segment>
            <Segment>Next</Segment>
          </Segment.Group>
        </div>
      </div>
    )
  }
}

const styles = {
  boxContainer:{
    width: '100%',
    justifyContent: 'center',
    padding: 0,
    margin: 0, 
    position: 'relative',
  },
  blueBox:{
    backgroundColor: '#2d618e',
    height: '40vh',
    borderRadius: '10px 10px 0px 0px',
    top: 0,
    left: 0,
  },
  buttonBar:{
    top: 0,
    left: 0,
    padding:0,
    margin:0,
    borderRadius: '0px 0px 10px 10px',
  },
}


export default TourBox;
