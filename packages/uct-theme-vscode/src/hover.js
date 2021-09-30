const vscode = require('vscode');

module.exports = function (context, initData, languages) {
  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(languages, {
      provideHover: async (document, position, token) => {
        const word = document.getText(document.getWordRangeAtPosition(position));
        // hover内容支持markdown语法
        return new vscode.Hover(initData[word]);
      },
    }),
  );
};
