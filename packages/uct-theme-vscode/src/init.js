const fs = require('fs');
const path = require('path');

const vscode = require('vscode');

const theme = async () => {
  let result = {};
  const cssRule = new RegExp(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)\s*\{([^}]+)\}/, 'ig');
  // 如果没有设置，返回undefined
  const file = vscode.workspace.getConfiguration().get('uctCssTip.file');
  let filePath = file || path.join(__dirname, '../index.css');

  const data = fs.readFileSync(filePath, 'utf-8');
  let a = cssRule.exec(data);
  while (a && a[1]) {
    result[a && a[1]] = a && a[0];
    a = cssRule.exec(data);
  }
  return result;
};

module.exports = theme;
