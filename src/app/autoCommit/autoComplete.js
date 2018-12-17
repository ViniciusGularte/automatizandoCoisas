const	shell	=	require('shelljs');
const moment = require('moment');
const readline = require('readline');
const dotenv = require('dotenv').config();
var resp=0;

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});
leitor.question(`\n---------------------\nDigite o numero de segundos para dar autoCommit \n---------------------\n`, function(answer) {
    resp = answer;
    leitor.close();
});

function	autoCommit()	{
  const dataAtual = moment().format("DD/MM/YYYY HH:mm:ss")
	shell.exec(`git	add .`);
  shell.exec(`git	status`);
  shell.exec(`git	commit -m '${dataAtual}'`);
}

setInterval(autoCommit, resp);
