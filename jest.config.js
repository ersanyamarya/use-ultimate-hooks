/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: './out/coverage',
  collectCoverageFrom: ['./lib/**/*.ts'],
  watchPathIgnorePatterns: ['node_modules'],
};
