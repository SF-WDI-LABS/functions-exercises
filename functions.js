// TODO: add your solutions here!

//### 1.  Build your own concatentation
function combineWords(word1, word2) {
  var combinedText = word1+word2;
  return combinedText;
}

combineWords('dog', 'house');

//### 2.  Repeat a phrase

function repeatPhrase(phrase, n) {
    for (i = 0; i < n; i++) {
      console.log(phrase);
    }
}

repeatPhrase ("Hello", 5);


//#3 Build your own Power function
function toTheNthPower(number, power) {
    if (power === 0) {
      return 1;
    }
    else {
      return number * toTheNthPower(number, power - 1);
    }
}

toTheNthPower(4, 5);
// displays 1024


//#4 Area of a circle
function areaOfACircle(radius) {
    pi = 3.14159
    var circleArea = radius*radius*pi;
    return circleArea;
}

areaOfACircle(2);
// displays roughly 12.57

//#5 Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    var c = Math.sqrt(a*a + b*b)
    return c;
}

pythagoreanTheorem(3, 4);
// displays 5


//#6 Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
      return true;
    }
    else {
      return false;
    }
}

isXEvenlyDivisibleByY(99, 3);
// displays true


//#7 Vowel Count
function countVowels(word) {
    wordCount = word.length;
    return wordCount;
}

countVowels("stealing");
// displays 3


//#8. Build an ASCII Triangle!
function printTriangle(length) {
    for (i = 1; i <= length; i++) {
      var space = " ";

      for (j = 1; j <= i; j++) {
        space += "*";
      }
      console.log(space);
    }
}

printTriangle(3);
// displays
// *
// **
// ***
