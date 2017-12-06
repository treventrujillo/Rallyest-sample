import React from 'react';
import store from '../store';

import { Button, Image, Menu } from 'semantic-ui-react';
import { toggleAccordionOn, toggleAccordionOff } from '../actions/files';

const toggleAccordion = () => {
  let { files } = store.getState('files')
  if (files.active === 1) {
    store.dispatch(toggleAccordionOn())
  } else {
    store.dispatch(toggleAccordionOff())
  }
}

export const fileButtons = () => {
  return (
    <div>
      <Menu.Item onClick={() => toggleAccordion()}>
        <Image src={require('../assets/images/icon-create-post.svg')} alt='Team' />
      </Menu.Item>

      <Menu.Item>
        <Image src={require('../assets/images/icon-upload-files.svg')} alt='Team' />
      </Menu.Item>
    </div>
  )
}

export const feedButtons = () => {
  return (
    <div>
      <Menu.Item>
        <Image src={require('../assets/images/icon-upload-files.svg')} alt='Team' />
      </Menu.Item>

      <Menu.Item>
        <Image src={require('../assets/images/photo.svg')} alt='Upload Photo' />
      </Menu.Item>
    </div>
  )
}

