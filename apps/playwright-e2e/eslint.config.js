const playwright = require('eslint-plugin-playwright');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  playwright.configs['flat/recommended'],  // Playwright's recommended rules
  ...baseConfig,  // Inherit base config from the root
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      globals: {
        browser: true,  // Browser context for Playwright tests
        node: true,     // Node.js context for setup/teardown scripts
      },
    },
    rules: {
      'playwright/no-conditional-in-test': 'warn',  // Warn if conditionals are used in tests
      'playwright/no-skipped-test': 'error',        // Prevent skipping tests
    },
  },
];
