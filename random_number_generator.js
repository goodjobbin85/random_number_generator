/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

alert("This program will generate numbers randomly. Pick a number from 1 to 10");

//generate a fandom number from 1 to 10
var number = Math.floor(Math.random() * 10) + 1;
alert("Your number is " + number);

if (number < 3) {
  alert("Try again");
}
else if (number <= 7) {
  alert("You can do better");
}
else {
  alert("You Win!");
}


