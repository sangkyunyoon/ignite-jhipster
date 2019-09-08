module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    //todo remove the next two rules
    'react-native/no-inline-styles': 0,
    'react/no-string-refs': 0,
  },
  globals: {
    describe: 'readonly',
    test: 'readonly',
    jest: 'readonly',
    expect: 'readonly',
    fetch: 'readonly',
    navigator: 'readonly',
    __DEV__: 'readonly',
    XMLHttpRequest: 'readonly',
    FormData: 'readonly',
    React$Element: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    by: 'readonly',
    element: 'readonly',
    it: 'readonly',
    device: 'readonly',
    after: 'readonly',
    afterEach: 'readonly',
  },
}