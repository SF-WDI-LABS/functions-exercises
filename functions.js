// TODO: add your solutions here!

// 1.) Build your own concatentation
function combineWords(word1, word2) {
    return (word1 + word2);
}

combineWords('dog', 'house');

// 2.) Repeat a phrase
function repeatPhrase(phrase, n) {
    for(var i = 0; i < n ; i++) {
    console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

// 3.) Build your own Power function
function toTheNthPower(number, power) {
    var result = 1;
    for(var i = 0; i < power; i++){
    result *= number;
    }
    return result;
}

toTheNthPower(4, 5);

// 4.) Area of a circle: πr2
function areaOfACircle(radius) {
    var area = 3.14159 * radius * radius;
    return area;
}

areaOfACircle(2);

// 5.) Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    var cSquared = (a * a) + (b * b);
    var c = Math.sqrt(cSquared);
    return c;
}

pythagoreanTheorem(3, 4);

// 6.) Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
    var result = (x % y === 0);
    return result;
}

isXEvenlyDivisibleByY(99, 3);

// 7.) Vowel Count
function countVowels(word) {
    var count = 0;
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i++) {
        if( word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            count++;
        }
    }
    return count;
}

countVowels("steAlIng");

// 8.) Build an ASCII Triangle!
function printTriangle(length) {
    for(var i = 0; i <= length; i++) {
        var row = "";
        for(var j = 0; j < i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

printTriangle(3);

// 9.) Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
function printPyramid(length) {
	for(var i = 0; i <= length; i++) {
		var row = "";

		for(var j = length - i; j > 0; j--) {
			row += " ";
		}
		for(var k = 0; k < i; k++) {
			row += "* ";
		}
		console.log(row);
	}
}

printPyramid(11);
//I definitely had to peek to figure out how to add the spacing. This one was tough :(
