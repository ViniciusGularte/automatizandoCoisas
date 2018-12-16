const	shell	=	require('shelljs');
const moment = require('moment');
function	autoCommit()	{
  const dataAtual = moment().format("DD/MM/YYYY HH:mm:ss")
	shell.exec(`git	add .`);
  shell.exec(`git	status`);
  shell.exec(`git	commit -m '${dataAtual}'`);
}
module.exports = {autoCommit}
