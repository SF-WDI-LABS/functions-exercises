// TODO: add your solutions here!

//Day 2 functions-exercises

//1 Build your own concatentation
function combineWords(word1, word2) {
    return (word1 + word2);

}

combineWords('dog', 'house');

//2 Repeat a phrase
function repeatPhrase(phrase, n) {
   for(var x = 0; x < n; x++)
   console.log(phrase);
}

repeatPhrase("Hello", 5);

//3 Build your own Power function
function toTheNthPower(number, power) {
  var result = number * number;
    for(var x = 2; x < power; x++ ){
    result = result * number;
}
return(result);
}
toTheNthPower(4, 5);

//4 Area of a circle: π r2
function areaOfACircle(radius) {
    var x = radius * radius;
    result = x * Math.PI;
    return (result);
}

areaOfACircle(2);


//5 Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    var cSquared = (a*a) + (b*b);
    return(cSquared);
}

pythagoreanTheorem(3, 4);

//6 Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
    var result = x % y === 0;
    return (result);
}

isXEvenlyDivisibleByY(99, 3);

//7 Vowel Count
function countVowels(word) {
  return word.match(/[aeiou]/gi).length;
}

countVowels("stealing");


//8 Build an ASCII Triangle!
function printTriangle(length) {
  var star= "*";
  for(var x=0; x<length; x++){
    console.log(star);
    star=star+"*";
  }
}
printTriangle(3);

// 9 Streach challenge! Build a pyramid!
function printPyramid(length) {
  for(i = 0; i <= length; i++){

    for (var star = "*"; star.length < i*2; star += " *") {}
    var space = " ";
    for (var x = 0; x < (length-i); x++){
      space += " ";
    }
    console.log(space + star);
  }
}

printTriangle(15);
