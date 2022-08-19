'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 'latest',
    project: require.resolve('./tsconfig.json'),
  },
  extends: [
    'plugin:@ota-meshi/recommended',
    'plugin:@ota-meshi/+node',
    'plugin:@ota-meshi/+typescript',
    'plugin:@ota-meshi/+eslint-plugin',
    'plugin:@ota-meshi/+package-json',
    'plugin:@ota-meshi/+json',
    'plugin:@ota-meshi/+yaml',
    'plugin:@ota-meshi/+md',
    'plugin:@ota-meshi/+vue3',
    'plugin:astro/all',
    'plugin:@ota-meshi/+prettier',
  ],
  rules: {
    'require-jsdoc': 'error',
    'no-warning-comments': 'off',
    'no-lonely-if': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        // FIXME: why are mjs not finding node_modules
        'node/no-missing-import': 'off',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: [require.resolve('./tsconfig.json')],
        sourceType: 'module',
      },
      rules: {
        'astro/prefer-split-class-list': [
          'error',
          {
            splitLiteral: true,
          },
        ],
        'prettier/prettier': 'error',
        'no-console': 'off',
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['*.svelte'],
      extends: ['plugin:svelte/recommended'],
    },
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
    },
    {
      files: ['*.solid'],
      plugins: ['solid'],
      extends: ['plugin:solid/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: require.resolve('./tsconfig.json'),
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'property',
            format: null,
          },
          {
            selector: 'method',
            format: null,
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['src/rules/**'],
      rules: {},
    },
    {
      files: ['tests/**'],
      rules: {
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
    {
      files: ['scripts/**/*.ts', 'tests/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: require.resolve('./tsconfig.json'),
      },
      rules: {
        'require-jsdoc': 'off',
        'no-console': 'off',
      },
    },
  ],
}
