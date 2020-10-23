module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  roots: [
    '<rootDir>/renderer/src'
  ],
  // TODO:testディレクトリにテストを置く場合、rootDirから変える
  // rootDir: 'test',
  // testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: [
    '<rootDir>/renderer/test/setupTests.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    // '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    // '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    // "^react$": "preact-compat",
    // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      'tsConfig': '<rootDir>/renderer/test/tsconfig.jest.json'
    }
  }
};
