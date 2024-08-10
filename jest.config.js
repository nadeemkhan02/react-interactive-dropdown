const path = require('path');

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.svg$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    // "node_modules/(?!(<package-to-transpile>|@testing-library|react-window)/)",
  ],
  moduleFileExtensions: ["js", "jsx"],
  // setupFilesAfterEnv: ['./jest.setup.js']
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|svg)$': path.resolve(__dirname, 'src/__mocks__/fileMock.js'),
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  compilerOptions: {
    "types": ["@testing-library/jest-dom"]
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ]
};
