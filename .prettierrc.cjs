module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^[./]', '^@api/(.*)$', '^@features/(.*)$', '^@shared/(.*)$'],
  importOrderSortSpecifiers: true,
};
