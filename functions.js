// TODO:
// Build your own concatentation
// Display a new string that is the combination of two arguments passed into the function
// Example: `dog` and `house` will display `doghouse`**

function combineWords(word1, word2) {
	return word1 + word2;
}
combineWords('dog', 'house');
// displays 'doghouse'



// Repeat a phrase
// Display an argument phrase to the console n times

function repeatPhrase(phrase, n) {
	for (var i = 0; i < n; i++){
    		console.log(phrase);
    }
}
repeatPhrase ("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello



// Build your own Power function
// Display number <sup>power</sup> *without* using built-in `Math` functions

function toTheNthPower(number, power) {
	var newNumber = 1
	for (var i = 0;i < power; i++){
			newNumber *= number;
	}
	console.log(newNumber);
	return newNumber;
}
toTheNthPower(4, 5);
// displays 1024



// Area of a circle:  &pi; r<sup>2</sup>
// Display the area of a circle given the radius

function areaOfACircle(radius) {
    var r = radius * radius;
    console.log(r);
    var area = Math.PI * r;
    console.log(area);
}
areaOfACircle(2);
// displays approximately 12.57



// Display c given a and b
function pythagoreanTheorem(a, b) {
    var c = (a * a) + (b * b);
    return c = Math.sqrt(c);
}
pythagoreanTheorem(3, 4);
// displays 5



// Return a boolean value whether or not X can be divided by Y without any remainders.

function isXEvenlyDivisibleByY(x, y) {
   if (x % y === 0){
       return true;
   } else {
       false;
   }
}
isXEvenlyDivisibleByY(99, 3);
// displays true



// Count the number of occurence of vowels in a word.
// Vowels are `a`, `e`, `i`, `o`, `u`, and `y`

function countVowels(word) {
	var vowelCount = 0;
	   for (var i = 0; i <= word.length; i++) {
	       if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
	           vowelCount += 1;
	       }
			 }
		 return vowelCount;
}
countVowels("stealing");
// displays 3



// Build an ASCII Triangle!

function printTriangle(length) {
    var asterisks = "*";
    console.log(asterisks);
    for (var i = 1; i < length; i ++) {
        asterisks = asterisks + "*"
        console.log(asterisks);
    }
}
printTriangle(3);
