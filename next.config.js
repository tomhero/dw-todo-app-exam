const withPlugins = require('next-compose-plugins');
const path = require('path');

module.exports = withPlugins([], {
  // any options here are included in sass compilation for your stories
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
