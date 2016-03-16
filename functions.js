//1. Build your own concatentation
function combineWords(word1, word2) {
    return(word1+word2);
}

combineWords('dog', 'house');


//2. Repeat a phrase
function repeatPhrase(phrase, n) {
  for(num = 0; num < n; num++) {
  console.log(phrase);
    }
}
repeatPhrase("Hello", 5);

//3. Build your own Power function
function toTheNthPower(number, power) {

    var result = 1
  for (i = 0; i < power; i++)
    result = result * number;


  return result;
}

toTheNthPower(4, 5);

//4. Area of a circle: π r2
function areaOfACircle(radius) {
    var p = 3.14
    return (p * (radius * radius));
}

areaOfACircle(4);

//5. Pythagorean Theorem: a2 + b2 = c2

function pythagoreanTheorem(a, b) {
    return Math.sqrt((a * a) + (b * b));

}

pythagoreanTheorem(3, 5);

//6. Is X Evenly Divisible by Y ?

function isXEvenlyDivisibleByY(x, y) {
    if((x%y) === 0) {
        return true
    }
}

isXEvenlyDivisibleByY(99, 3);

// 7. Vowel Count:

function countVowels(word) {
    var result = 0;
    for(var i = 0; i < word.length ; i++ ){
        console.log(word[i]);
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y")
    result ++
    }
    return result
}


countVowels("hello");

//8. Build an ASCII Triangle!

function printTriangle(length) {
for(var i = 1; i <= length; i++) {

var t = '';

for(var j = 0; j < i; j++) {
t += '*';
}

// 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
// TODO: add your solutions here!
