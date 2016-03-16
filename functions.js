

//SOLUTIONS TO FUNCTIONS EXERCISE

//1.Build your own concatenation

function combineWords(word1, word2) {
  return word1 + word2;
}

combineWords('dog', 'house');

//OR

function combineWords(word1, word2) {
  return word1.concat(word2);
}

combineWords('dog', 'house');

//2. Repeat a phrase

function repeatPhrase(phrase, n) {
	for (i = 0; i < n; i++) {
	    console.log(phrase);
	}
}

repeatPhrase("Hello", 5);
console.log();

//3. Build your own power function

var result = 1;

function toTheNthPower(number, power) {
  for (var i = 0; i < power; i++) {
    result *= number;
  }
  return(result);
}

toTheNthPower(4, 5);

//4. Area of a circle

function areaOfACircle(radius) {
  var rsquared = radius * radius;
  console.log(rsquared);
	var area = Math.PI * rsquared;
	console.log(area);
  return area;
}

areaOfACircle(2);

//5. pythagoreanTheorem
//the square of the hypothenuse (c) is equal to the sum of the sqaures of a and b
function pythagoreanTheorem(a, b) {
    var c = (a * a) + (b * b);
	  c = Math.sqrt(c);
	  console.log(c);
	  return c;
}

pythagoreanTheorem(3, 4);

//6. Is X evenly divisible by y

function isXEvenlyDivisibleByY(x, y) {
  if ( x % y === 0) {
	  return true;
	} else {
	  return false;
	}
}

isXEvenlyDivisibleByY(99, 3);

//7. Vowel counter

function countVowels(word) {
  var vowelcount = 0;
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if ( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o'   || word[i] === 'u' || word[i] === 'y') {
      vowelcount++;
    }
  }
  console.log(vowelcount);
  return vowelcount;
}

countVowels("stealing");

//8. Build an ASCII tree

function printTriangle(length) {
  for (i = 1; i <= length; i++) {
    var triangle = '';
    for (j = 0; j < i; j++) {
	    triangle += '*';
	  }
	    console.log(triangle);
  }
}

printTriangle(3);
