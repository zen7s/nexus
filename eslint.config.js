import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. React
            ['^react'],
            // 2. Внешние пакеты (node_modules)
            ['^@?\\w'],
            // 3. Слои по порядку
            ['^@app'],
            ['^@pages'],
            ['^@components'],
            ['^@modules'],
            ['^@shared'],
            // 4. Относительные импорты
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  prettier,
])
