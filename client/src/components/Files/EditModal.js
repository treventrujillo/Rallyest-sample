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
} from 'semantic-ui-react';

class EditModal extends Component {

  // removeLabel = (id, label) => {
  //   const { dispatch } = this.props;
  //   axios.post('/api/removelabel', { id, label })
  //     .then(res => {
  //       console.log(res)
  //       dispatch(setFlash('Label Removed', 'green'))
  //     })
  //     .catch(res => {
  //       console.log(res)
  //       dispatch(setFlash('Label Not Removed', 'red'))
  //     });
  // }
  
  // editModal = ({file, label}) => (
  //   <Modal trigger={<Button>Show Modal</Button>}>
  //     <Modal.Content>
  //       <Modal.Header>Edit Post</Modal.Header>
  //       <Header>All Tags</Header>
  //       {labels.map(label =>
  //         <Segment key={label.id} style={{ display: 'flex' }}>
  //           <Item>
  //             <Item.Content>
  //               {label.attributes.name}
  //               <Button onClick={() => this.addLabel(file.id, label)}>
  //                 Add Label
  //                 </Button>
  //               <Button onClick={() => this.removeLabel(file.id, label)}>
  //                 Remove Label
  //                 </Button>
  //             </Item.Content>
  //           </Item>
  //         </Segment>
  //       )}
  //     </Modal.Content>
  //   </Modal>
  // );

  // render () {
  //   const { file, labels } = this.props;
  //   return (
  //     <div>
  //       {this.editModal({file, label})}
  //     </div>
  //   );
  // }
}

export default connect()(EditModal);