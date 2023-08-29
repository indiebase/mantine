module.exports = {
  extends: ['mantine', 'plugin:jest/recommended', 'plugin:storybook/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'react/jsx-pascal-case': 'off',
    'newline-per-chained-call': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
