const init = require('./init');
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */

exports.activate = async function (context) {
  const initData = await init();
  require('./uct-theme')(context, initData); // uct-theme插件
};

/**
 * 插件被释放时触发
 */

exports.deactivate = function () {
  console.log('您的扩展“vscode-plugin-demo”已被释放！');
};
