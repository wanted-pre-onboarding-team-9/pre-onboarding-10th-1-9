module.exports = {
  parser: 'typescript',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  arrowParens: 'always',
  bracketSameLine: false,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.yml',
      options: {
        parser: 'yaml',
      },
    },
  ],
};
