// 1: Build your own concatentation
// Combine 2 words into 1
function combineWords(word1, word2) {
  return(word1 + word2)
}

combineWords('dog', 'house')

// 2: Repeat a phrase
// Repeat a phrase x amount of times
function repeatPhrase(phrase, n) {
  for (var i = 0; i < n; i++)
    console.log(phrase);
}

repeatPhrase("Hello", 5)

// 3: Build your own Power function
// Return number to the y power
function toTheNthPower(number, power) {
var result = 1
for (i = 0; i < power; i++)
result *= number;
return result;
}
toTheNthPower(4,5);

// 4: Area of a circle: π r2
// Find area of a circle
function areaOfACircle(radius) {
  var pie = 3.14159
  return(pie*(radius*radius));
}
areaOfACircle(2);

// 5: Pythagorean Theorem: a2 + b2 = c2
// Find C using Pythagorean Theorem
function pythagoreanTheorem(a, b) {
  return Math.sqrt((a*a + b*b));
}
pythagoreanTheorem(3, 4);

// 6. Is X Evenly Divisible by Y ?
// Determine whether X divided by Y has a remainder for true value return
function isXEvenlyDivisibleByY(x, y) {
  if (x % y === 0) {
    return true;
  }
}

// 7: Vowel Count:
// Find the number of vowels in given word and return value of sum of vowels from given word
function countVowels(word) {
  result = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
      result ++;
    }
    return result;
  }

  countVowels("stealing");

  // 8: Build an ASCII Triangle!
  // Print astericks to form a right angle triangle
  // I wasn't able to figure this one out; from what I can gather, the loop to log an empty spaces
  // is set 1 value above the loop set to execute an asterick so that after each asterick, an
  // empty space gets executed. I'm still unsure how the function perform line breaks.

  function printTriangle(length) {
  	for(var i = 1; i <= length; i++) {

  		var tier = '';

  		for(var j = 0; j < i; j++) {
  			tier += '*';
  		}

  		console.log(tier);
  	}
  }
  // 9: Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
  // Like problem #9, I wasn't able to get this question. It appears there is a lot being
  // assumptions being juggled at the same time. From what I can tell, there's a loop to
  // create empty spaces to the left of the asterick, and a loop to create empty spaces
  // to the right of the loop, then another loop to execute the asterick. I'm hoping we
  // can review both probems 8 & 9 in class.
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
