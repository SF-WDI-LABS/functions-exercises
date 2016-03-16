// #1: Build your own concatentation
function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');
// prints 'doghouse'


// #2: Repeat a phrase
function repeatPhrase(phrase, n) {
    var i = 0;
    for (i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);
/* prints:
Hello
Hello
Hello
Hello
Hello */


// #3 Build your own Power function
function toTheNthPower(number, power) {
    var value = 1;
    for (i = 0; i < power; i++) {
        value *= number;
        console.log('did this ' + i + " time(s)");
    }
    return value;
}

toTheNthPower(4, 5);
// prints 1024


// #4 Area of a circle: π r2
function areaOfACircle(radius) {
    // calls function #3: Power Function to process the square
    var radiusSquared = toTheNthPower(radius, 2);
    return 3.14159 * radiusSquared;
}

areaOfACircle(2);
// prints 12.56636


// #5 Pythagorean Theorem
/* Used my own function:
function pythagoreanTheorem(a, b) {
    var aSquared = toTheNthPower(a, 2);
    var bSquared = toTheNthPower(b, 2);
    var cSquared = aSquared + bSquared;
    var c = Math.sqrt(cSquared);
    return(c);
}
*/
// without the function:
function pythagoreanTheorem(a, b) {
    var aSquared = a * a;
    var bSquared = b * b;
    var cSquared = aSquared + bSquared;
    var c = Math.sqrt(cSquared);
    return(c);
}

pythagoreanTheorem(3, 4);
// returns 5;


// #6 Is X Evenly Divisible by Y ?
/* this works but I thought it wasn't a very elegant solution:
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0){
        return true;
    } else {
        return false;
    }
}
*/
function isXEvenlyDivisibleByY(x, y) {
        return x % y === 0;
}

isXEvenlyDivisibleByY(99, 3);
// returns true


// #7 Vowel Count
function countVowels(word) {
    var vowelAmount = 0;
    var i = 0;
    for (i = 0; i < word.length; i++){
        if ( (word[i] === 'a') || (word[i] === 'e') || (word[i] === 'i') || (word[i] === 'o') || (word[i] === 'u') || (word[i] === 'y') ){
            vowelAmount++;
        }
    }
    return vowelAmount;
}

countVowels('stealing');


// #8 Build an ASCII Triangle
function printTriangle(length) {
    var asterix = "*";
    console.log(asterix);
    for (i = 1; i < length; i++){
        asterix = asterix + "*";
        console.log(asterix);
    }
}

printTriangle(3);
// displays
// *
// **
// ***


// 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
// This was really hard but extremeley satisfying when I figured it out!!!!

function printTriangle(length) {
    var asterix = "*";
    var spacer = " ";

    for (i = 1; i < length; i++){
            spacer = spacer + " ";
    }
    console.log(spacer + asterix);
    for (i = 1; i < length; i++){
        asterix = asterix + " *";
        spacer = spacer.slice(0,-1);
        console.log(spacer + asterix);
    }
}

printTriangle(10);
