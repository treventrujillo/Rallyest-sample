import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import { setFlash } from '../../actions/flash';
import { getLabels } from '../../actions/labels';

import {
  Segment,
  Item,
  Button,
} from 'semantic-ui-react';

class LabeList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getLabels())
  }
  
  deleteLabel = (id) => {
    const { labels } = this.state;
    const { dispatch } = this.props;
    axios.delete(`/api/labels/${id}`)
      .then(res => {
        dispatch(setFlash('Label deleted', 'green'))
        this.setState({ labels: labels.filter(label => label.id !== id) })
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label failed to delete', 'red'))
      });
  }

  addLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/addlabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Added to File', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label Failed', 'red'))
      });
  }

  listLabels = (labels) => {
    return labels.labels.map(label =>
      <Segment key={label.id} style={{ display: 'flex' }}>
        <Item>
          <Item.Content>
            {label.attributes.name}
            <Button onClick={() => this.deleteLabel(label.id)}>
              Delete Label
            </Button>
          </Item.Content>
        </Item>
      </Segment>
    );
  }

  render () {
    const { labels } = this.props;
    return (
      <div>
        {this.listLabels(labels)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { labels: state.labels }
}

export default connect(mapStateToProps)(LabeList);