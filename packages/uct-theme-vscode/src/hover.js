const vscode = require('vscode');

module.exports = function (context, initData) {
  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(['vue', 'jsx', 'tsx', 'html'], {
      provideHover: async (document, position, token) => {
        const word = document.getText(document.getWordRangeAtPosition(position));
        // hover内容支持markdown语法
        return new vscode.Hover(initData[word]);
      },
    }),
  );
};
