const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es2020: true,
    mocha: true,
  },
  plugins: ['json', 'prettier', 'react-hooks'],
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    typescript: true,
    ecmaVersion: 2020,
    experimentalDecorators: true,
    ecmaFeatures: {
      jsx: true,
      classes: true,
      impliedStrict: true,
    },
  },
  reportUnusedDisableDirectives: isProduction,
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, noSortAlphabetically: true },
    ],
    'react/sort-prop-types': [
      'error',
      { callbacksLast: true, noSortAlphabetically: true },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-handler-names': 'error',
    'react/prop-types': 'error',
    'react/jsx-no-bind': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-fragments': 'off',
    'react/static-property-placement': ['off'],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/setupTests.ts',
          'jest.config.ts',
          'jest.config.js',
          '**/*.stories.ts',
          '**/*.stories.tsx',
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
        endOfLine: 'lf',
      },
    ],
    'import/prefer-default-export': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/extensions': ['error', 'never'],
    'class-methods-use-this': 'off',
    'prefer-promise-reject-errors': 'off',
    'max-classes-per-file': 'off',
    'no-use-before-define': ['off'],
    'no-shadow': 'off',
  },

  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
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
              'Image',
              'Option',
              'screen',
            ],
          },
        ],
      },
    },
  ],
};
