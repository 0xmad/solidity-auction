import config from '@errmac/jest';

export default {
  ...config,
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/pages/_document.tsx',
  ],
};
