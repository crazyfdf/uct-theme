const path=require('path')
const fs=require('fs')
const chalk = require('chalk');
module.exports=()=>{
  fs.copyFile(path.resolve(__dirname,'../../uct-theme.scss'),path.resolve(process.cwd(),'uct-theme.scss'),err=>{
    if(err){console.log(err)}
    else{
      chalk.green('εε»Ίζε');
    }
  })
}