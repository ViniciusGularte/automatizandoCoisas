const	shell	=	require('shelljs');
const moment = require('moment');
const readline = require('readline');

function	autoCommit()	{
  const dataAtual = moment().format("DD/MM/YYYY HH:mm:ss")
	shell.exec(`git	add .`);
  shell.exec(`git	status`);
  shell.exec(`git	commit -m '${dataAtual}'`);
}
setInterval(autoCommit(), 400000);

function push(){

}

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite push para enviar dados ao servidor\n", function(answer) {
    let resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});
