const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // 该插件使用 terser 来压缩 JavaScript。

const config = {
  target: 'node',
  entry: './src/extension.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  optimization: {
    usedExports: true, // 标记未使用到的代码
    minimize: true, // 压缩和tree shaking
    minimizer: [
      new TerserPlugin({
        // 压缩js代码，
        extractComments: false, // 去除第三方包的注释文件
      }),
    ],
  },
  externals: {
    vscode: 'commonjs vscode',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
