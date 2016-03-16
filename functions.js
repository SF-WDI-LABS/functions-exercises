//1 Return a new string that is the combination of two arguments passed into the function
function combineWords(word1, word2) {
    return (word1 + word2);
}
console.log(combineWords('dog', 'house'));
// displays 'doghouse'


//2 Display an argument phrase to the console n times
function repeatPhrase(phrase, n) {
for (i = 0; i < n; i++) {
  console.log(phrase);
  }
}
repeatPhrase("Hello", 5);


//3 Return number power without using built-in Math functions

function toTheNthPower(number, power) {
    if (power === 0) {
        return 1;
    }
  else {
      return number * toTheNthPower(number, power - 1);
  }
}

toTheNthPower(4, 5);


//4 Return the area of a circle given the radius

function areaOfACircle(radius) {
  return (3.14 * radius * radius);
}

areaOfACircle(2);


//5 Pythagorean Theorem: a2 + b2 = c2
//Return c given a and b

function pythagoreanTheorem(a, b) {
    return Math.sqrt(((a * a) + (b * b)));
}

pythagoreanTheorem(3, 4);


//6 Return a boolean value whether or not X can be divided by Y without any remainders.

function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        return true;
    }
    else {
        return false;
    }
}

isXEvenlyDivisibleByY(100, 3);


//7 Return the number of occurences of vowels in a word. Vowels are a, e, i, o, u, and y
//Challenge: Can you alter the code to count both upper case AND lower case?

function countVowels(word) {
  var vowelCount = 0;

    for (i = 0; i < word.length; i++) {

      if  (word.charAt(i) === "a" || word.charAt(i) === "e" ||  word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u" || word.charAt(i) === "y") {
        vowelCount++;
        }
      }
      return vowelCount;
}

countVowels("stealing");


//8 Display a simple triangle with asterisks

function printTriangle(length) {
  var space = ' ';
  for (i=0; i<length; i++) {

    space += "*";
    console.log(space);
  }
}

printTriangle(3);
// displays
// *
// **
// ***
