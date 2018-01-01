module.exports = {
  root: false,
  parser: 'babel-eslint',
  env: {
    browser: false,
    node: false
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
