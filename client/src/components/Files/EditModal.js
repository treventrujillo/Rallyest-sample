import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import { setFlash } from '../../actions/flash';

import {
  Modal,
  Button,
  Segment,
  Item,
  Header,
  Dropdown,
} from 'semantic-ui-react';

class EditModal extends Component {

  removeLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/removelabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Removed', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label Not Removed', 'red'))
      });
  }

  addLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/addlabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Added', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label not added', 'red'))
      });
  }

  render () {
    const { file, labels } = this.props;
    return (
      <div>
        <Modal trigger={<Dropdown.Item>Edit Post</Dropdown.Item>}>
          <Modal.Content>
            <Modal.Header>Edit Post</Modal.Header>
            {labels.labels.map(label => 
              <Segment key={label.id} style={{ display: 'flex' }}>
                <Item>
                  <Item.Content>
                    {label.attributes.name}
                    <Button onClick={() => this.addLabel(file.id, label)}>
                      Add Label
                    </Button>
                    <Button onClick={() => this.removeLabel(file.id, label)}>
                      Remove Label
                    </Button>
                  </Item.Content>
                </Item>
              </Segment>
            )}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { labels: state.labels }
}

export default connect(mapStateToProps)(EditModal);