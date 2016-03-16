//Notes to self: Use return instead of console.log within the function as necessary
//Call the function when submitting this

// TODO: add your solutions here!

//1.

function combineWords(word1, word2) {
  return word1 + word2;
}

combineWords('dog', 'house');

//OR

function combineWords(word1, word2) {
  return word1.concat(word2);
}

combineWords('dog', 'house');

//2.

function repeatPhrase(phrase, n) {
	for (i = 0; i < n; i++) {
	    console.log(phrase);
	}
}

repeatPhrase("Hello", 5);
console.log();

//3.

var result = 1;

function toTheNthPower(number, power) {
  for (var i = 0; i < power; i++) {
    result *= number;
  }
  return(result);
}

toTheNthPower(4, 5);

//4.

function areaOfACircle(radius) {
  var rsquared = radius * radius;
  console.log(rsquared);
	var area = Math.PI * rsquared;
	console.log(area);
  return area;
}

areaOfACircle(2);
