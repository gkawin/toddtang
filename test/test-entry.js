require('./spec-helpers')
const requireAllTests = context => context.keys().forEach((name) => {
  describe(name, () => {
    context(name)
  })
})

requireAllTests(require.context('../src', true, /\.spec\.js$/))
