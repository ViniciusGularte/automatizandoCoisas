const autoCommit = require("./autoCommit.js")
function loopAutoCommit(){
  setInterval(autoCommit.autoCommit, 400000);
}
module.exports = {loopAutoCommit}
