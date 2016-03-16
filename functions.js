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
    var vowelCount = 0;

    for (i=0; i < word.length; i++) {

      if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u" || word.charAt(i) === "y") {
        vowelCount++;
      }
    }
    return vowelCount;
}

countVowels("stealing");
// displays 3


//#8. Build an ASCII Triangle!
function printTriangle(length) {
    var space = '';

    for (i = 0; i < length; i++) {
      space += "*";
      console.log(space);
    }

}

printTriangle(3);
// displays
// *
// **
// ***
