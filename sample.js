console.log("Type 'help' for commands");
console.log("Square numbers:");
console.log("Enter player 1 name");

var player1 = new Player(readLine());
var player2 = new Player(readLine());

console.log("logging name after making players" + player1.name);

function readLine() {
    var inputText;
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter player name? ", function(answer) {
        inputText = answer;
        console.log("Player name:", answer);
        rl.pause();
    });
    return inputText;
}