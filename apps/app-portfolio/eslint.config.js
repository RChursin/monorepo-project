const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('plugin:react/recommended'),              // React recommended rules
  ...compat.extends('plugin:react-hooks/recommended'),        // React Hooks recommended rules
  ...baseConfig,  // Inherit base config from the root
  ...nx.configs['flat/react-typescript'],  // Nx React and TypeScript rules
  {
    ignores: ['.next/**/*'],  // Ignore Next.js build files
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        window: true,
        document: true,
      },
    },
    rules: {
      'react/jsx-key': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-danger': 'error',
      'react/jsx-no-target-blank': 'warn',
    },
  },
];
