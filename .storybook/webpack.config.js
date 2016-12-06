var path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = function (storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.output = {
    path: path.resolve('../public'),
    filename: 'static/[name].bundle.js',
    publicPath: '/'
  }
  // Return the altered config
  return storybookBaseConfig
}
