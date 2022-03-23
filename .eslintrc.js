module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    overrides: [
      {
        files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
        parser: '@typescript-eslint/parser',
        extends: [
          '@react-native-community',
          'airbnb',
          'eslint:recommended',
          'plugin:react/recommended',
          'prettier',
        ],
        plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier', '@typescript-eslint'],
        env: {
          browser: true,
          commonjs: true,
          es6: true,
          jest: true,
          mocha: true
        },
        parserOptions: {
          ecmaVersion: 2020,
          ecmaFeatures: {
            jsx: true
          },
          sourceType: 'module'
        },
        settings: {
          'import/resolver': {
            node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
              map: [
                ['@core', './src/core'],
                ['@libraries', './src/libraries'],
                ["@assets", "./assets"]
              ]
            }
          }
        },
        rules: {
          'prettier/prettier': 'warn',
          'react/jsx-props-no-spreading': 'off',
          'react/jsx-filename-extension': 'error',
          'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
          'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
          'arrow-body-style': ['error', 'as-needed'],
          'no-use-before-define': 'off',
          '@typescript-eslint/no-use-before-define': ['error'],
          'react/prop-types': 'off',
          'react/require-default-props': 'off',
          'import/extensions': [
            'error',
            'ignorePackages',
            {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never'
            }
          ],
        }
      },
      {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        rules: {
          'react/jsx-filename-extension': 'off',
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'error',
          'no-shadow': 'off',
          '@typescript-eslint/no-shadow': 'error'
        },
        globals: {
          JSX: true
        }
      }
      // Eslint for test case env
      // {
      //   files: ['**/*.test.js'],
      //   extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
      //   plugins: ['prettier', 'jest'],
      //   env: {
      //     commonjs: true,
      //     es6: true,
      //     node: true,
      //     jest: true,
      //   },
      // },
    ]
  };
  