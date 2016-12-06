import { configure } from '@kadira/storybook'

function loadStories () {
  require('../src/elements/Text/story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
