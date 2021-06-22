module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'semi': [2, 'never'],
        '@typescript-eslint/no-unused-vars': 'off', // uses in new <script setup>
        'space-before-function-paren': ['error', 'always'],
    }
}