// get number of dice rolls example node dice-roller.js 3 (rolls 3 times)
const numDice = process.argv[2];

const rollDie = () => Math.floor(Math.random() * 6) + 1;

// rolling dice
let rolls = [];
for (let i = 0; i < numDice; i++) {
  rolls.push(rollDie());
}

// OUTPUT
console.log(`Rolled ${numDice} dice: ${rolls.join(', ')}`);