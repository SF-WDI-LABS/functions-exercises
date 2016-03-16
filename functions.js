// TODO: add your solutions here!

//1.
function combineWords(word1, word2) {
    return (word1 + word2);
}
combineWords('dog', 'house');

//2.
function repeatPhrase(phrase, n) {
   var i = 0;
   for (i = 0; i < n; i++){
    console.log(phrase);
   }
}
repeatPhrase("Hello", 5);

//3.
function toTheNthPower(number, power) {
    var i = 0;
    var res = number;
    for (i = 0; i < power - 1; i++){
        res = res * number;
    }
     return res;
}
toTheNthPower(4, 5);

//4.
function areaOfACircle(radius) {
    var pi = 3.14157;
    var result = pi * radius * radius;
    return result;
}

areaOfACircle(2);
//5.
function pythagoreanTheorem(a, b) {
    var ayy = a * a;
    var bee = b * b;
    var see = ayy + bee;
    var result = Math.sqrt(see);
    return result;
}
pythagoreanTheorem(3, 4);

//6.
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0){
        return true;
    } else {
        return false;
    }
}
isXEvenlyDivisibleByY(99, 3);

//7.
function countVowels(word){
    var string = word;
    var occur = string.indexOf('a', 'e', 'i', 'o', 'u', 'y');
    return occur;
}
countVowels("stealing");

//8. Had to look at the solutions for this one
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var tier = '';

		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}
}
