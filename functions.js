// TODO: add your solutions here!
### 1.  Build your own concatentation
function combineWords(word1, word2) {
	return (word1+ " "+word2);
}

combineWords('Bob', 'Kliger');

### 2.  Repeat a phrase
function repeatPhrase(phrase, n) {
    var n
    for (n=0; n<=4; n++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);
### 3.  Build your own Power function
function toTheNthPower(number, power) {
	var i;
	originalNumber=number;
	for (i=0;i<power-1; i++) {
	    number = number * originalNumber;
	}
	return number;
};

toTheNthPower(2, 4);

### 4. Area of a circle:  &pi; r<sup>2</sup>


function areaOfACircle(radius) {
	return Math.PI*radius*radius;
}

areaOfACircle(2);
// displays approximately 12.57


### 5.  Pythagorean Theorem:
function pythagoreanTheorem(a, b) {
	return Math.sqrt((a*a) +(b*b));
}

pythagoreanTheorem(3, 4);


###  6. Is X Evenly Divisible by Y ?

function isXEvenlyDivisibleByY(x, y) {
	if (x % y === 0) {
	    return true;
	}  else {
	    return false;
	}
}

isXEvenlyDivisibleByY(99, 2);

### 7.  Vowel Count:


function countVowels(word) {
	length = word.length;
	var vowelCount = 0;
	var i;
	for (i=0; i<length; i++) {
	    if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u" || word.charAt(i) === "y") {
	        vowelCount++;
	    }
	}
	return vowelCount;
}

countVowels("stealing");

### 8. Build an ASCII Triangle!

function printTriangle(length) {
    var asterisk = "*";
    var totalAsterisks = ""
    if (length > 1) {
        var i;
        for (i=0; i<length; i++) {
            totalAsterisks = totalAsterisks + asterisk;
            console.log(totalAsterisks);
        }
    }
}

printTriangle(3);


### 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?

function printTriangle(length) {
    var asterisk = "*";
    var totalAsterisks = "";
    if (length > 1) {
        var i;
        for (i=0; i<length; i++) {
            padding = setPadding(length,i);
            totalAsterisks = totalAsterisks + " " + asterisk;
            console.log(padding + totalAsterisks);
        }
    }
}

function setPadding(length,row) {
    var padding = " ";
    var totalPadding = "";
    var i;
    for (i=0; i<length+2-row; i++) {
        totalPadding = totalPadding + padding;
    }
    return totalPadding;
}


printTriangle(10)
