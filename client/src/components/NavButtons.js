import React from 'react';

import { Button, Image, Menu } from 'semantic-ui-react';

export const fileButtons = () => {
  return (
    <div>
      <Menu.Item onClick={() => test()}>
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

