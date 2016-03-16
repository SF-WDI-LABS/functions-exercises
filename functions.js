//1.
function combineWords(word1, word2) {
    //concatenate two words
    return word1+word2;
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

//2.function repeatPhrase(phrase, n) {
    //Display an argument phrase to the console n times
    var i;
    for(i=0; i<5; i++){
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

//3.
function toTheNthPower(number, power) {
    // Display number power
    var i;
    var nThNumber = number;
    for(i=1; i<power; i++){
        nThNumber = nThNumber * number;
    }
    console.log(nThNumber);
}

toTheNthPower(4, 5);
// displays 1024

//4.
function areaOfACircle(radius) {
    // Display the area of a circle given the radius
    var area = Math.PI * Math.pow(radius,2);
    console.log(area);
}

areaOfACircle(2);
// displays approximately 12.57

//5.
function pythagoreanTheorem(a, b) {
    // Pythagorean Theorem: a2 + b2 = c2
    var cSqr = Math.pow(a,2) + Math.pow(b,2);
    var c = Math.sqrt(cSqr);
    //display c
    console.log(c);
}

pythagoreanTheorem(3, 4);
// should display 5;

//6.
function isXEvenlyDivisibleByY(x, y) {
    /* Return a boolean value whether or not X can be
    divided by Y without any remainders.*/
    return (x % y === 0);
}

isXEvenlyDivisibleByY(99, 3);
// displays true

//7.
function countVowels(word) {
    //Count the number of occurence of vowels in a word.
    //Vowels are a, e, i, o, u, and
    var i;
    var counter=0;
    for(i=0; i < word.length; i++){
      if(word[i].toLowerCase()==='a' || word[i].toLowerCase()==='e' ||
      word[i].toLowerCase()==='i' || word[i].toLowerCase()==='o' ||
      word[i].toLowerCase()==='u'){
          counter++;
      }
    }
    console.log(counter);
}

countVowels("stealing");
// displays 3

//8.
function printTriangle(length) {
    // Display a simple triangle with asterisks
    var i;
    var line = "";
    for(i=1; i<=length; i++){
        line = line + "*";
        console.log(line);
    }

}

printTriangle(3);
// displays
// *
// **
// ***
