import React, { Component } from 'react';
import { Accordion, Form, Icon } from 'semantic-ui-react';
import FileModal from './FileModal';

class FileAccordion extends Component {
  state = { activeIndex: 1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  fileForm = () => {
    <Form>
      <Form.Title>
        Add File
      </Form.Title>
    </Form>
  }

  render() {
    const { activeIndex } = this.state
    return(
        <Accordion>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Add File
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <FileModal />
          </Accordion.Content>
        </Accordion>
    )
  }
}

export default FileAccordion;