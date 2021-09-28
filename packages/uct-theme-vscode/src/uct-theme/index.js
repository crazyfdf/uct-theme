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
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(['vue', 'jsx', 'tsx', 'html'], {
      provideCompletionItems: (document, position, token, context) => {
        const line = document.lineAt(position);
        // 只截取到光标位置为止，防止一些特殊情况
        const lineText = line.text.substring(0, position.character);
        if (/class[Name]*\w?=\w?['|"]/gi.test(lineText)) {
          return Object.entries(initData).map(([key, value]) => {
            return new vscode.CompletionItem(
              { label: key, description: value },
              vscode.CompletionItemKind.Snippet,
            );
          });
        }
      },
      resolveCompletionItem: (item, token) => {
        // item.label;
        return null;
      },
    }),
  );
};
