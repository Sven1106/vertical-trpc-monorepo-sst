module.exports = {
  plugins: ['@typescript-eslint', 'monorepo-cop'],
  extends: ['eslint:recommended', 'plugin:monorepo-cop/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
};
