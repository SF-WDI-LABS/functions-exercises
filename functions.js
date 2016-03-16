//1.COMBINE DOGHOUSE
function combineWords(word1, word2) {
    return word1 + word2;
}
combineWords('dog', 'house');

//2.HELLO 5 TIMES
function repeatPhrase(phrase, n) {
   for(var i = 0; i<n; i++){
       console.log(phrase);
   }
}
repeatPhrase ("Hello", 5);

//3.POWER OF
//4 to the power of 5 so number to the power of power.
function toTheNthPower(number,power){
  var total = 1;
  for (var i = 0; i < power; i++) {
    total *= number;
  }
  return total;
}
toTheNthPower(4,5);

//4.AREA OF A CIRCLE
function areaOfACircle(radius) {
   //area = 3.14 * r(squared)
   var area = 3.14 * (radius*radius);
   return area;
}
areaOfACircle(2);

//5.PYTHAGOREAN THEORUM
function pythagoreanTheorem(a, b) {
    // a squared + b squared = c squared
    var x = Math.sqrt;
    var y = (a * a);
    var z = (b * b);
    var sideC = x((y)+(z));
    return sideC;
}
pythagoreanTheorem(3, 4);

//6.EVENLY DIVISIBLE
//USE MODULUS
function isXEvenlyDivisibleByY(x, y) {
    if(x % y === 0){
        console.log("true");
    }
}
isXEvenlyDivisibleByY(99, 3);
// displays true

//7.VOWEL COUNT
//Googled and found on Stack Overflow!!
function countVowels(word) {
  return word.match(/[aeiou]/gi).length;
}
countVowels("stealing");

//8.ASCII TRIANGLE
function printTriangle(length) {
    for(var i=1; i<=length; i++){
    var triangle = "";
    for(var t=0; t<i; t++){
    triangle += "*";
    }
    console.log(triangle);
}
}
printTriangle(3);

//9.ALTER printTriangle FUNCTION.
function printPyramid(length) {
    for(var i = 1; i <= length; i++){
    var triangle="";
    for(var s = (length - i); s > 0; s--){
    triangle += " ";
  }
    for(var t = 0; t < i; t++){
    triangle += " * ";
    }
    console.log(triangle);
  }
}
printPyramid(10);
