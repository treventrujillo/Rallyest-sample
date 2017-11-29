import React, { Component } from 'react';
import { Accordion, Input, Icon, Form } from 'semantic-ui-react';

class PostComment extends Component {
  state = { 
    activeIndex: 1,
    comment: '' 
  }

  handelSubmit = (e) => {
    e.preventDefault();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return(
      <Accordion>
        <Accordion.Title 
          active={activeIndex === 0} 
          index={0} 
          onClick={this.handleClick}
        >
          <Icon name='comment' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form>
            <Form.Input 
              placeholder="Tell them how you really feel" 
              value={this.state.comment}
            />
          </Form>
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default PostComment;