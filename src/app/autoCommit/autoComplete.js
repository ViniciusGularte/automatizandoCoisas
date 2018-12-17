const	shell	=	require('shelljs');
const moment = require('moment');
const readline = require('readline');
const dotenv = require('dotenv').config();

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

leitor.question(`\n---------------------\nDigite o numero de segundos para \n---------------------\n`, function(answer) {
    let resp = answer;
    setInterval(autoCommit, resp);
    leitor.close();
});

function	autoCommit()	{
  const dataAtual = moment().format("DD/MM/YYYY HH:mm:ss")
	shell.exec(`git	add .`);
  shell.exec(`git	status`);
  shell.exec(`git	commit -m '${dataAtual}'`);
}
