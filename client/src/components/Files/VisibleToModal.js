import FileUpload from './FileUpload';
import FileModal from './FileModal';
import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const VisibleToModal = () => (
  <Modal trigger={
    <Button floated='right' style={{ backgroundColor: 'transparent', color: '#00AADF' }}>
      Visible to 4 team members
    </Button>
  }>
    <Modal.Header>Visibility</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
export default VisibleToModal