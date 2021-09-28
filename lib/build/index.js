const exec = require('child_process').exec;
const path = require('path');
module.exports = () => {
  const command = `sass ${path.join(__dirname, '../../index.scss')} ${path.join(
    process.cwd(),
    'uct-index.css',
  )}`;
  console.log(command);
  exec(command);
};
