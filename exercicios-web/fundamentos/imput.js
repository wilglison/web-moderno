var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("nome: ", function(answer) {
    var resp = answer;
    console.log(resp);
    leitor.close();
});