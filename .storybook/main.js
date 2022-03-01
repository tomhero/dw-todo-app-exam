const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      // this is for scss
      test: /.*\.(?:sc|c)ss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/styles/global.scss'),
    });
    config.resolve.roots = [path.resolve(__dirname, "../public")];
    return config;
  },
};
