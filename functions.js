// TODO: add your solutions here!

// 1.  Build your own concatentation
//     Return a new string that is the combination of two arguments passed into the function

function combineWords(word1, word2) {
  return word1 + word2;
}

combineWords('dog', 'house');
// displays 'doghouse'


// 2.  Repeat a phrase
//     Display an argument phrase to the console n times


function repeatPhrase(phrase, n) {
  for (var i = 0; i < n; i ++){
    console.log(phrase);
  }
}

repeatPhrase("Hello", 5);

// displays
// Hello
// Hello
// Hello
// Hello
// Hello


// 3.  Build your own Power function
//     number <sup>power</sup> *without* using built-in `Math` functions

function toTheNthPower(number, power) {
  var pNum = 1;
  for (var i = 0; i < power; i ++){
    pNum *= number;
  }
  return pNum;
}

toTheNthPower(4, 5);
// displays 1024


// 4. Area of a circle:  &pi; r<sup>2</sup>
//    Return the area of a circle given the radius
//    [background information](http://www.mathgoodies.com/lessons/vol2/circle_area.html)


function areaOfACircle(radius) {
  return ( 3.14 * radius * radius );
}

areaOfACircle(2);
// displays approximately 12.57



// 5.  Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
//     Return c given a and b
//     [background information](https://en.wikipedia.org/wiki/Pythagorean_theorem)

function pythagoreanTheorem(a, b) {
  return Math.sqrt( (a * a) + (b * b) );
}

pythagoreanTheorem(3, 4);
// should display 5;


//  6. Is X Evenly Divisible by Y ?
//     Return a boolean value whether or not X can be divided by Y without any remainders.
//     Hint: Explore the world of Modulus operators!

function isXEvenlyDivisibleByY(x, y) {
  return ( (x % y) === 0 )
}

isXEvenlyDivisibleByY(99, 3);
// displays true


// 7.  Vowel Count:
//     Return the number of occurences of vowels in a word.
//     Vowels are `a`, `e`, `i`, `o`, `u`, and `y`


function countVowels(word) {
  var vcount = 0;
  var vowels = "AaEeIiOoUuYy";
  for (var i = 0; i < word.length; i ++){
    for (var n = 0; n < vowels.length; n ++){
      if(word[i] === vowels[n]){
        vcount ++;
      }
    }
  }
  return vcount;
}

countVowels("stealing");
// displays 3


// 8. Build an ASCII Triangle!
//    Display a simple triangle with asterisks


function printTriangle(length) {
  var triangle = "";
  for (var i = 0; i < length; i ++){
    triangle += "*"
    console.log(triangle);
  }
}

printTriangle(3);
// displays
// *
// **
// ***


// 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
//    **Example:  printPyramid(10);**

//  1234567890123456789
//           *
//          * *
//         * * *
//        * * * *
//       * * * * *
//      * * * * * *
//     * * * * * * *
//    * * * * * * * *
//   * * * * * * * * *
//  * * * * * * * * * *
//  1234567890123456789

//  *Warning: This is a surprisingly tricky interview-level exercise.  Try at your own risk!*


function printPyramid(length) {
  for (var level = 1; level <= length; level ++){
    var triangle = "";
    for (var space = ( length - level ) ; space > 0; space --){
      triangle += " ";
    }
    for (var stars = 0; stars < level; stars ++){
      triangle += "* ";
    }
    console.log(triangle);
  }
}
printPyramid(5);
