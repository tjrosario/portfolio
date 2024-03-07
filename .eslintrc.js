/* eslint-env node */

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  extends: ['prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parserOptions: {
        project: ['./esconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['prettier'],
      extends: [
        //declaring 'next/core-web-vitals' and 'prettier' again in case
        //the two plugin:... configs above overrode any of their rules
        //Also, 'prettier' needs to be last in any extends array
        'prettier',
      ],
      rules: {
        '@next/next/no-document-import-in-page': 0,
        '@next/next/no-sync-scripts': 0,
        'no-case-declarations': 0,
        'no-useless-escape': 0,
        'react-hooks/exhaustive-deps': 0,
        'react-hooks/rules-of-hooks': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-redundant-type-constituents': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-unsafe-argument': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
      },
    },
  ],
};
