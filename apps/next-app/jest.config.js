const config = require('@errmac/jest');

module.exports = {
  ...config,
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/pages/_document.tsx',
    '!**/__stories__/*.stories.tsx',
    '!**/__stories__/*.stories.ts',
  ],
};
