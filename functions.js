// TODO: add your solutions here!

// 1. Build your own concatentation
function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');


// 2. Repeat a phrase
function repeatPhrase(phrase, n) {
	var i;
	for(i = 0; i < n; i++) {
		console.log(phrase);
	}
}

repeatPhrase('Hello', 5);


// 3. Build your own power function
function toTheNthPower(number, power) {
  var newNumber = 1;
  var i;

  for(i = 0; i < power; i++) {
    newNumber *= number;
  } return newNumber;
}

toTheNthPower(4, 5);


// 4. Area of a circle
function areaOfACircle(radius) {
	return 3.14159 * radius * radius;
}

areaOfACircle(2);


// 5. Pythagorean Theorem: a^2 + b^2 = c^2
function pythagoreanTheorem(a, b) {
	return Math.sqrt( (a * a) + (b * b) );
}

pythagoreanTheorem(3, 4);


// 6. Is X Evenly Divisible by Y?
function isXEvenlyDivisibleByY(x, y) {
	return x % y === 0;
}

isXEvenlyDivisibleByY(99, 3);


// 7. Vowel Count:
function countVowels(word) {
  var count = 0;
  var i;

	for (i = 0; i < word.length; i++) {
    if ( (word[i] === 'a') || (word[i] === 'e') || (word[i] === 'i') || (word[i] === 'o') || (word[i] === 'u') ) {
	    count++;
    }
  } return count;
}

countVowels('stealing');


// 8 . Build an ASCII Triangle!
function printTriangle(length) {
  var i;

	for(i = 1; i <= length; i++) {

		var row = '';
    var j;

		for(j = 0; j < i; j++) {
			row += '*';
		}
		console.log(row);
	}
}

printTriangle(3);


// 9. Stretch Challenge ???
