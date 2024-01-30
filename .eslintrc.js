module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'eqeqeq': 0,
    'keyword-spacing': [
      'error',
      {
        'overrides': {
          'if': { 'after': false },
          'for': { 'after': false },
          'while': { 'after': false },
          'switch': { 'after': false },
          'catch': { 'after': false }
        }
      }
    ],
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'no-console': 0,
    'no-extend-native': ['error', { 'exceptions': ['Array'] }],
    'no-prototype-builtins': 0,
    'no-unneeded-ternary': ['error', { 'defaultAssignment': true }],
    'prefer-const': 0,
    'quote-props': 0,
    'require-await': 0,
    'space-before-function-paren': ['error', 'never'],
    'vue/attribute-hyphenation': 0,
    'vue/attributes-order': 0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-indent': 0,
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-template-shadow': 'error',
    'vue/no-v-html': 0,
    'vue/order-in-components': 0,
    'vue/require-prop-types': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': 'error'
  }
}
