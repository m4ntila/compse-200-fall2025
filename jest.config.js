module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/.internal/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "clover"],
};