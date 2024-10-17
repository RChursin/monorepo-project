const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const { fixupConfigRules } = require('@eslint/compat');
const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...fixupConfigRules(compat.extends('next')),              // Next.js recommended rules
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),  // Core web vitals for performance
  ...baseConfig,  // Inherit base config from the root
  ...nx.configs['flat/react-typescript'],  // Nx React and TypeScript rules
  {
    ignores: ['.next/**/*'],  // Ignore Next.js build files
  },
  {
    files: ['**/*.ts', '**/*.tsx'],  // Apply to TypeScript files
    rules: {
      // React-specific rules
      'react/jsx-key': 'error',  // Ensure each JSX element has a unique "key" prop
      'react-hooks/rules-of-hooks': 'error',  // Enforce the rules of hooks
      'react-hooks/exhaustive-deps': 'warn',  // Warn about missing dependencies in effect hooks
      'react/no-danger': 'error',  // Disallow the use of dangerouslySetInnerHTML
      'react/jsx-no-target-blank': 'warn',  // Prevent security vulnerabilities with external links
    },
  },
];
