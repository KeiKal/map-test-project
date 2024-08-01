// vue.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Workers'), to: 'Workers' },
          { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Assets'), to: 'Assets' },
          { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Widgets'), to: 'Widgets' },
          { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/ThirdParty'), to: 'ThirdParty' }
        ],
      }),
    ],
  },
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['CESIUM_BASE_URL'] = JSON.stringify('');
      return args;
    });
  },
};
