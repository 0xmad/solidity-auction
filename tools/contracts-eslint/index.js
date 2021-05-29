const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es2020: true,
    mocha: true,
  },
  plugins: ['json', 'prettier'],
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
        moduleDirectory: ['node_modules', 'contracts'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: true,
    sourceType: 'module',
    typescript: true,
    ecmaVersion: 2020,
    experimentalDecorators: true,
    ecmaFeatures: {
      jsx: false,
      classes: true,
      impliedStrict: true,
    },
  },
  reportUnusedDisableDirectives: isProduction,
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**/*.ts',
          'scripts/**/*.ts',
          'hardhat.config.ts',
        ],
      },
    ],

    'no-debugger': isProduction ? 'error' : 'off',
    'no-console': isProduction ? 'error' : 'off',
    'no-underscore-dangle': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        useTabs: false,
        trailingComma: 'all',
        arrowParens: 'always',
        overrides: [
          {
            files: '*.sol',
            options: {
              printWidth: 80,
              tabWidth: 4,
              useTabs: false,
              singleQuote: false,
              bracketSpacing: false,
              explicitTypes: 'always',
            },
          },
        ],
      },
    ],
    'import/prefer-default-export': 'warn',

    'import/extensions': ['error', 'never'],
    'class-methods-use-this': 'off',
    'prefer-promise-reject-errors': 'off',
    'max-classes-per-file': 'off',
    'no-use-before-define': ['off'],
    'no-shadow': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      parserOptions: {
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false },
        ],
        '@typescript-eslint/no-shadow': [
          'error',
          {
            builtinGlobals: true,
            allow: [
              'location',
              'event',
              'history',
              'name',
              'status',
              'History',
              'Selection',
              'Text',
              'Option',
              'screen',
              'expect',
            ],
          },
        ],
      },
    },
  ],
};
