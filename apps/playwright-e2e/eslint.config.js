const playwright = require('eslint-plugin-playwright');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  playwright.configs['flat/recommended'],  // Playwright's recommended rules
  ...baseConfig,  // Inherit base config from the root
  {
    env: {
      browser: true,  // Set browser context since Playwright runs in the browser
      node: true,     // Enable node context for setup scripts
    },
    files: ['**/*.ts', '**/*.js'],
    rules: {
      // Example Playwright rules (you can adjust these based on your needs)
      'playwright/no-conditional-in-test': 'warn',  // Warn when using conditional logic inside tests
      'playwright/no-skipped-test': 'error',        // Throw error if tests are skipped
      // You can add more Playwright-specific rules here as needed
    },
  },
];
