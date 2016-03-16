// TODO: add your solutions here!

// ----------------- 1. Build your own concatentation -----------------
function combineWords(word1, word2) {
  return word1 + word2;
}

console.log(combineWords("dog", "house"));


// ----------------- 2. Repeat a phrase -----------------
function repeatPhrase(phrase, n) {
    if (n <= 0) {
        return;
    } else {
        console.log(phrase);
        n = n - 1;
        repeatPhrase(phrase, n);
    }
}

repeatPhrase ("Hello", 5);


// ----------------- 3. Build your own Power function -----------------
function toTheNthPower(number, power) {
    var i;
    startSum = number;
    for (i = 1; i < power; i++) {
        startSum = startSum * number;
    }
    return startSum;
}


toTheNthPower(4, 5);

// ----------------- 4. Area of a circle -----------------
function areaOfACircle(radius) {
    return (Math.PI * radius * radius);
}

areaOfACircle(2);

// ----------------- 5. Pythagorean Theorem -----------------
function pythagoreanTheorem(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

pythagoreanTheorem(3, 4);


// ----------------- 6. Is X evenly divisible by Y? -----------------
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        return true;
    } else {
        return false;
    }
}


// ----------------- 7. Vowel Count -----------------
function countVowels(word) {
    i = 0;
    count = 0;
    word = word.toLowerCase();
    while (i <= word.length) {
        if (word[i]==="a"||word[i]==="e"||word[i]==="i"||word[i]==="o"||word[i]==="u"||word[i]==="y") {
            count++;
        }
        i++;
    }
    return count;
}

countVowels("stealing");


// ----------------- 8. Build an ASCII Triangle! -----------------
function printTriangle(length) {
    var star = "*";
    var i;
    for (i = 0; i < length; i++) {
    console.log(star);
    star = star + "*";
    }
}

printTriangle(3);


// ----------------- 9. Stretch Challenge -----------------

function printPyramid(length) {
  var i;
	for(i = 1; i <= length; i++) {
		var thisLevel = '';
        var addSpace;
        for(addSpace = length - i; addSpace > 0; addSpace--) {
          thisLevel += ' ';
        }
        var addStar;
        for(addStar = 0; addStar < i; addStar++) {
          thisLevel += '* ';
        }
		console.log(thisLevel);
	}
}
printPyramid(10);
