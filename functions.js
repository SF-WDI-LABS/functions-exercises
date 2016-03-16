// TODO: add yoon combineWords(word1, word2) {

    
problem 1

function combineWords(word1, word2) {
return word1 + " " + word2;
}

combineWords('dog', 'house');
// displays 'doghouse'ions here!


problem 2

function repeatPhrase(phrase, n) {
    for (var i = 1; i <= n; i++) {
      console.log(phrase); 
    }
}

repeatPhrase("hello", 5)


problem 3

function toTheNthPower(number, power) {
    var result = number
  for (var i = 1; i < power; i++) {
    result = result*number;
      console.log(result);
   }
}


problem 4

function areaOfACircle(radius) {
    return Math.PI*(radius*radius);
}

areaOfACircle(2);
// displays approximately 12.57


problem 5

function pythagoreanTheorem(a, b){
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(pythagoreanTheorem(4, 3));


problem 6

function isXEvenlyDivisibleByY(x, y) {
    return (x % y == 0)? true:false;
}

isXEvenlyDivisibleByY(99, 2);
// displays true


problem 7

function Vowels(word) {
  var vowel = word.match(/[aeiouon printTriangle(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';
		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}
}
//printTriangle(3);i);
  return vowel === null ? 0 : vowel.length;
}

  countVowels("stealing");

problem 8


function printTriangle(length) {
	for(var i = 1; i <= length; i++) {
        	var tier = '';
		for(var j = 0; j < i; j++) {
		tier += '*';
}
		console.log(tier);
	}
}
//printTriangle(3);


problem 9

function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
}
		for(var k = 0; k < i; k++) {
			tier += '* ';
}
		console.log(tier);
	}
}
//printPyramid(10);
