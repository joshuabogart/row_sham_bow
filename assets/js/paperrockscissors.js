// Creating variables
var playerOne = prompt("Rock, paper or scissors?", "r, p, or s");

var toolArray = ["r", "p", "s"];

var win = 0;
var lose = 0;
var tie = 0;

// To be assigned with random math function
var playerTwo;

if (playerOne === r && playerTwo === p) {
  win += 1;
}
if (playerOne === r && playerTwo === s) {
  lose += 1;
}
if (playerOne === r && playerTwo === r) {
  tie += 1;
}
if (playerOne === p && playerTwo === s) {
  lose += 1;
}
if (playerOne === p && playerTwo === r) {
  win += 1;
}
if (playerOne === p && playerTwo === p) {
  tie += 1;
}
if (playerOne === s && playerTwo === s) {
  tie += 1;
}
if (playerOne === s && playerTwo === r) {
  lose += 1;
}
if (playerOne === s && playerTwo === p) {
  win += 1;
}
