const	path	=	require('path');
const	shell	=	require('shelljs');
const moment = require('moment');
autoCommit();
function	autoCommit()	{
  const dataAtual = moment().format("DD/MM/YYYY HH:mm:ss")
	shell.exec(`git	add .`);
  shell.exec(`git	status`);
  shell.exec(`git	commit -m '${dataAtual}'`);


  console.log(dataAtual);
}
