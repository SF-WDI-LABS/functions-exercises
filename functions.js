// TODO: add your solutions here!

//### 1.  Build your own concatentation
function combineWords(word1, word2) {
  return word1+word2;
}

combineWords('dog', 'house');

//### 2.  Repeat a phrase

function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
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
    var pi = 3.14159;
    var circleArea = radius * radius * pi;
    return circleArea;
}

areaOfACircle(2);
// displays roughly 12.57

//#5 Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    return Math.sqrt(a*a + b*b);
}

pythagoreanTheorem(3, 4);
// displays 5


//#6 Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
    return (x % y === 0);
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


//#9 Challenge
function starsThisRow(numberOfRows){
    var starsThisRow = 1;
    var whiteSpaceEachSide = numberOfRows - 1;

    for(var i = 1; i < numberOfRows + 1; i++){
        var row = '';

        console.log('starsThisRow', starsThisRow);
        printStars(i)
        starsThisRow += 1;
        console.log('whiteSpaceEachSide', whiteSpaceEachSide);
        whiteSpaceEachSide -= 1;
    }

}
var printStars = function printStars(string){
    return string += '*';
}
var printWhiteSpace = function printWhiteSpace(numberOfSpaces){
  var space = ' ';
  var aSide = '';
  debugger;

  for (var i = 0; i < numberOfSpaces; i++){
      aSide += space;
      debugger;
  }
  return aSide;
}
['','',''].map(printStars('*'))
function whiteSpaceThisRow (row) {
  if (row.length)
}
