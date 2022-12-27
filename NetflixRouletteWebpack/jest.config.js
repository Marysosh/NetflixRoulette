// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "src/**/**.{js,jsx,mjs}",
    "!**/**/error-boundary/**",
    "!**/**/error-page/**",
    "!**/{(App),(index)}.{js,jsx,mjs}",
    "!**/**/{(middlewares),(storeFactory)}.{js,jsx,mjs}",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  //   setupFiles: ["<rootDir>/enzyme.config.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "<rootDir>/src/App.js",
    "<rootDir>/src/index.js",
    "<rootDir>/src/store/middlewares.js",
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
