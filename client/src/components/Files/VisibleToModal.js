import FileUpload from './FileUpload';
import FileModal from './FileModal';
import React, { Component } from 'react';
import _ from 'lodash'
import { 
  Button, 
  Header, 
  Modal, 
  Search, 
  Divider 
} from 'semantic-ui-react';

export default class VisibleToModal extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(isMatch),
      });
    })
  }


  render() {
    const { isLoading, value, results } = this.state
      return (
        <Modal trigger={
          <Button floated='right' 
            style={{ backgroundColor: 'transparent', color: '#00AADF' }}>
            Visible to 4 team members
          </Button>
        }>
          <Modal.Header 
            style={{ backgroundColor: '#0d6192' }}
          >
            Visibility
           <Search onFocus
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              {...this.props}
            />
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Level 1</Header>
               <Divider style={{ backgroundColor: '#0d6192' }}/>
                <p>Cindy</p>
                <p>Bob</p>
                <p>Angelina</p>
              <Header>Level 2</Header>
               <Divider style={{ backgroundColor: '#0d6192' }}/>
                <p>John</p>
                <p>Paul</p>
              <Header>Parents</Header>
               <Divider style={{ backgroundColor: '#0d6192' }}/>
                <p>Erin</p>
                <p>Aaron</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
     )
  }
}
