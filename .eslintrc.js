/* eslint-env node */

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:@next/next/recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  overrides: [
    {
      extends: ['plugin:@next/next/recommended', 'prettier'],
      files: ['*.js', '*.jsx'],
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
