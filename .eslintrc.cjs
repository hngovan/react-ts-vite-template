module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: 'auto',
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        quoteProps: 'as-needed',
        insertPragma: false
      }
    ]
  }
}
