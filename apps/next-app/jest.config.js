const config = require('@errmac/jest');

module.exports = {
  ...config,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|less)$': './config/CSSStub.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./config/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/pages/_document.tsx',
    '!**/__stories__/*.stories.tsx',
    '!**/__stories__/*.stories.ts',
  ],
};
