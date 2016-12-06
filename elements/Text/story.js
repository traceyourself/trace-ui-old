import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Text from './index'

storiesOf('Text', module)
  .add('basic', () => (
    <Text>Hello</Text>
  ))
  .add('small', () => (
    <Text type='small'>Hello</Text>
  ))
  .add('paragraph', () => (
    <Text type='p'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
  ))
  .add('heading', () => (
    <div>
      <Text type='h1'>
        h1
      </Text>
      <Text type='h2'>
        h2
      </Text>
      <Text type='h3'>
        h3
      </Text>
      <Text type='h3'>
        h3
      </Text>
      <Text type='h4'>
        h4
      </Text>
      <Text type='h5'>
        h5
      </Text>
      <Text type='h6'>
        h6
      </Text>
    </div>
  ))
  .add('colors', () => (
    <div style={{backgroundColor: 'black'}}>
      <Text color='link'>link</Text>
      <Text color='warning'>warning</Text>
      <Text color='success'>success</Text>
      <Text color='danger'>danger</Text>
      <Text color='white'>white</Text>
    </div>
  ))
  .add('transform', () => (
    <div>
      <Text>None: </Text><Text transform='none'>None</Text>
      <br/>
      <Text>Uppercase: </Text><Text transform='uppercase'>Uppercase</Text>
      <br/>
      <Text>Lowercase: </Text><Text transform='lowercase'>Lowercase</Text>
      <br/>
      <Text>capitalize: </Text><Text transform='capitalize'>capitalize</Text>
    </div>
  ))
  .add('decoration', () => (
    <div>
      <Text decoration='underline'>underline</Text>
      <br/>
      <Text decoration='overline'>overline</Text>
    </div>
  ))
