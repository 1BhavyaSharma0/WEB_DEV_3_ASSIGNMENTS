const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

console.log("Rolling dice...");

for (let i = 1; i <= 5; i++) {
    console.log(`Roll ${i}: ${rollDice()}`);
}

console.log("Dice rolling completed.");