const	shell	=	require('shelljs');
const loopAutoCommit = require("./loopAutoCommit.js")
shell.exec(`git	push origin master`);
