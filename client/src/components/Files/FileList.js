import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import EditModal from './EditModal';
import { getFiles } from '../../actions/files';

import {
  Segment,
  Button,
  Image,
  Dropdown,
} from 'semantic-ui-react';

class FileList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFiles())
  }
  
  deleteFile = (id) => {
    const { files } = this.state;
    axios.delete(`/api/files/${id}`)
      .then(res => {
        this.setState({
          files: files.filter(file => file.id !== id)
        });
      });
  }

  listFiles = (files) => {
    return files.files.map(file =>
      <Segment key={file.id}>
        <div style={{ display: 'flex', }}>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'center' }}>
            <div style={{ alignSelf: 'center', justifyContent: 'center', paddingRight: '10px' }}>
              <Image src={require('../../assets/images/adobefile.svg')} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '80%' }}>

            <div style={{ flex: 1, fontWeight: 'bold', fontSize: '110%' }}>
              <span>{file.attributes.name}</span>
            </div>

            <div style={{ fontStyle: 'italic', fontSize: '90%', }}>
              <span style={{ color: '#8f8f8f' }}>{file.attributes.uploadDate}</span>
            </div>

            <div>
              <Button onClick={() => this.deleteFile(file.id)}>
                Delete
              </Button>
            </div>

            <div>
              <EditModal file={file} />
            </div>

          </div>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'flex-end' }}>
            <div style={{ padding: '5px', }}>

              <Dropdown
                trigger={this.homeTrigger}
                options={this.homeTeamOptions}
                icon={null}
                pointing='top right'
              />

            </div>
          </div>
        </div>
      </Segment>
    );
  }

  homeTeamOptions = [
    { key: 1, text: 'Edit File Tags', value: 1 },
    { key: 2, text: 'Delete File', value: 2 },
  ]

  homeTrigger = (
    <span>
      <Image src={require('../../assets/images/icon-more.svg')} />
    </span>
  )

  render () {
    const { files } = this.props;
    return (
      <div>
        {this.listFiles(files)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps)(FileList);