(()=>{var e={587:(e,t,r)=>{const s=r(496);e.exports=function(e,t,r){e.subscriptions.push(s.languages.registerHoverProvider(r,{provideHover:async(e,r,o)=>{const n=e.getText(e.getWordRangeAtPosition(r));return new s.Hover(t[n])}}))}},205:(e,t,r)=>{const s=r(147),o=r(17),n=r(496);e.exports=async()=>{let e={};const t=new RegExp(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)\s*\{([^}]+)\}/,"ig");let r=n.workspace.getConfiguration().get("uctCssTip.file")||o.join(__dirname,"../index.css");const i=s.readFileSync(r,"utf-8");let c=t.exec(i);for(;c&&c[1];)e[c&&c[1]]=c&&c[0],c=t.exec(i);return e}},917:e=>{const t=["html","javascript","javascriptreact","rescript","typescript","typescriptreact","vue"];e.exports=t},850:(e,t,r)=>{const s=r(496);e.exports=function(e,t,r){e.subscriptions.push(s.languages.registerCompletionItemProvider(r,{provideCompletionItems:(e,r,o,n)=>{const i=e.lineAt(r).text.substring(0,r.character);if(/class[Name]*\w?=\w?['|"]?([\w+\s]+)['|"]?/gi.test(i))return Object.entries(t).map((([e,t])=>new s.CompletionItem(e,s.CompletionItemKind.Field)))},resolveCompletionItem:(e,r)=>(e.documentation=t[e.label],e)}," ","'",'"'))}},496:e=>{"use strict";e.exports=require("vscode")},147:e=>{"use strict";e.exports=require("fs")},17:e=>{"use strict";e.exports=require("path")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}var s={};(()=>{var e=s;const t=r(205),o=r(917);e.activate=async function(e){const s=await t();console.log(o),r(587)(e,s,o),r(850)(e,s,o)},e.deactivate=function(){console.log("您的扩展“vscode-plugin-demo”已被释放！")}})(),module.exports=s})();