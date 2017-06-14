import { configure } from '@storybook/react'

const context = require.context('../src', true, /\.stories\.js$/)

function loadStories () {
  const stories = context.keys()
  for (const key of stories) {
    context(key)
  }
}

configure(loadStories, module)
