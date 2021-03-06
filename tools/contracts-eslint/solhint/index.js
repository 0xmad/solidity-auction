module.exports = {
  extends: 'solhint:recommended',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'constructor-syntax': 'error',
    'code-complexity': ['warn', 7],
    'max-line-length': ['error', 80],
    'avoid-suicide': 'error',
    'avoid-sha3': 'warn',
    'private-vars-leading-underscore': 'error',
    'compiler-version': ['error', '^0.8.4'],
    'func-visibility': ['error', { ignoreConstructors: true }],
  },
};
