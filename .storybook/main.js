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

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components/*": path.resolve(__dirname, "../src/components/*"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@styles/*": path.resolve(__dirname, "../src/styles/*"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@public/*": path.resolve(__dirname, "../src/public/*"),
      "@public": path.resolve(__dirname, "../src/public/"),
      "@services": path.resolve(__dirname, "../src/services/"),
      "@contexts": path.resolve(__dirname, "../src/contexts/"),
      "@hooks": path.resolve(__dirname, "../src/hooks/"),
      "@models": path.resolve(__dirname, "../src/models/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
      "@redux/*": path.resolve(__dirname, "../src/redux/*"),
      "@redux": path.resolve(__dirname, "../src/redux/"),
      "@hooks/*": path.resolve(__dirname, "../src/hooks/*"),
      "@hooks": path.resolve(__dirname, "../src/hooks/"),
      "@services/*": path.resolve(__dirname, "../src/services/*"),
      "@services": path.resolve(__dirname, "../src/services/"),
      "@utils/*": path.resolve(__dirname, "../src/utils/*"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
      "@test/*": path.resolve(__dirname, "../src/test/*"),
      "@test": path.resolve(__dirname, "../src/test/"),
    };

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.roots = [path.resolve(__dirname, "../public")];
    return config;
  },
};
