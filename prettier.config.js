'use strict'

module.exports = {
  singleQuote: true,
  // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  semi: false,
  // Trailing commas help with git merging and conflict resolution
  trailingComma: 'all',
  printWidth: 100,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
