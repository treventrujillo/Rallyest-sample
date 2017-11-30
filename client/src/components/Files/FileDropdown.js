import React, { Component } from 'react';

import EditModal from './EditModal';
import { deleteFile } from '../../actions/files';
import { connect } from 'react-redux';

import { Dropdown, Image } from 'semantic-ui-react';

class FileDropdown extends Component {

  handleFileDelete = (id) => {
    this.props.dispatch(deleteFile(id))
  }

  render() {
    const { file } = this.props;
    return (
      <Dropdown trigger={this.homeTrigger} icon={null} closeOnChange pointing='top-right'>
        <Dropdown.Menu>
          <EditModal file={file} />
          <Dropdown.Item onClick={() => this.handleFileDelete(file.id)}>
            Delete 
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  homeTrigger = (
    <span>
      <Image src={require('../../assets/images/icon-more.svg')} />
    </span>
  )
}

export default connect()(FileDropdown);