const vscode = require('vscode');
module.exports = function (context, initData, languages) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      languages,
      {
        provideCompletionItems: (document, position, token, context) => {
          const line = document.lineAt(position);
          // 只截取到光标位置为止，防止一些特殊情况
          const lineText = line.text.substring(0, position.character);
          if (/class[Name]*\w?=\w?['|"]?([\w+\s]+)['|"]?/gi.test(lineText)) {
            return Object.entries(initData).map(([key, value]) => {
              return new vscode.CompletionItem(key, vscode.CompletionItemKind.Field);
            });
          }
        },
        resolveCompletionItem: (item, token) => {
          item.documentation = initData[item.label];
          return item;
        },
      },
      ' ',
      "'",
      '"',
    ),
  );
};
