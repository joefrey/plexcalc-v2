const compose = require('next-compose-plugins');
cssConfig = {};

module.exports = compose([
  [cssConfig],
  {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      });
      return config;
    },
  },
]);