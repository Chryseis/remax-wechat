const path = require('path');
const less = require('@remax/plugin-less');

module.exports = {
  plugins: [less()],
  configWebpack({ config }) {
    config.resolve.alias.merge({
      src: path.resolve(__dirname, 'src')
    });
  }
};
