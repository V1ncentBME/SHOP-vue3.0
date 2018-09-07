module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    "arrow-body-style": "off",
    "no-restricted-globals": "off",
    "guard-for-in": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
  	"no-console": "off",
    'no-debugger': 'off',
    'no-eval': 	'off',
    "no-extra-semi": "off",
    'semi': "off",
    "comma-dangle": [2, "never"],
    "eqeqeq": [2, "allow-null"],
    "eol-last": "off",
    "indent": "off",
    "no-tabs": "off",
    "spaced-comment": "off",
    "quotes": "off",
    "linebreak-style": "off",
    "no-param-reassign": "off",
    "object-curly-newline": "off",
    "no-trailing-spaces": "off",
    "no-mixed-operators": "off",
    "prefer-template": "off",
    "max-len": "off",
    "no-underscore-dangle": "off",
    "arrow-parens": "off",
    "keyword-spacing": "off",
    'vue/no-async-in-computed-properties': 'warning',
    'vue/no-duplicate-attributes': 'warning',
    'vue/no-parsing-error': 'warning',
    'vue/no-reserved-keys': 'warning',
    'vue/no-shared-component-data': 'off',
    'vue/no-textarea-mustache': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-extra-semi': 'off',
    'vue/require-component-is': 'off',
    'vue/require-render-return': 'off',
    'vue/require-valid-default-prop': 'warning',
    'vue/valid-v-cloak': 'off',
    'vue/valid-v-else-if': 'warning',
    'vue/valid-v-else': 'warning',
    'vue/valid-v-for': 'warning',
    'vue/valid-v-html': 'warning',
    'vue/valid-v-if': 'warning',
    'vue/valid-v-model': 'warning',
    'vue/valid-v-on': 'warning',
    'vue/valid-v-once': 'warning',
    'vue/valid-v-pre': 'warning',
    'vue/valid-v-show': 'warning',
    'vue/valid-v-text': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}