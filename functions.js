//1.
function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');

//2
function repeatPhrase(phrase, n) {
    for(var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

//3
function toTheNthPower(number, power) {
    var result = 1;
    for(var i = 0; i < power; i++) {
        result = result * number;
    }
    return result;
}

toTheNthPower(4, 5);

//4
function areaOfACircle(radius) {
    return Math.PI * radius * radius;
}

areaOfACircle(2);

//5
function pythagoreanTheorem(a, b) {
    var x = (a * a) + (b * b);
    return Math.sqrt(x);
}

//6
function isXEvenlyDivisibleByY(x, y) {
    var remainder = x % y;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

isXEvenlyDivisibleByY(99, 3);

//7
function countVowels(word) {
	var result = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			result++;
		}
	}
	return result;
}

countVowels("stealing");

//8 I'm stuck on this one :(
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {
	    var x = ;
      for(var j = 1; j <= i; j++) {
        console.log("*");
      }
    }
    return x;
}

printTriangle(3);
