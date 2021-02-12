module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': ['error', { allow: ['tron', 'log'] }],
    'no-param-reassign': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/control-has-associated-label': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['CustomComponent'],
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video', 'th'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid'
        ],
        depth: 3
      }
    ]
  }
}
