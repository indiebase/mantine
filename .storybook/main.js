const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('path');

function getPath(value) {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  features: {
    storyStoreV7: false,
  },
  addons: [
    getPath('storybook-dark-mode'),
    getPath('@storybook/addon-links'),
    getPath('@storybook/addon-essentials'),
    getPath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getPath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
};
