const init = require('./init');
const languages = require('./languages');
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */

exports.activate = async function (context) {
  const initData = await init();
  console.log(languages);
  require('./hover')(context, initData, languages); // uct-theme插件
  require('./tip')(context, initData, languages); // uct-theme插件
};

/**
 * 插件被释放时触发
 */

exports.deactivate = function () {
  console.log('您的扩展“vscode-plugin-demo”已被释放！');
};
