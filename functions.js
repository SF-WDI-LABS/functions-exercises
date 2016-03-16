//1. Build your own concatentation
function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');

//2. Repeat a phrase
function repeatPhrase(phrase, n) {
    for (num = 1; num <= n; num++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

//3. Build your own Power function

function toTheNthPower(number, power) {
    var x = number;
    for (var i = power; i > 1 ; i--) {
        x *=number;
    }
    return x;
}

toTheNthPower(4, 5);

//4. Area of a circle: π r2

function areaOfACircle(radius) {
    var area;
    var pi = 3.14159;
    area = pi*(radius*radius);
    return area;
}

areaOfACircle(2);

//5. Pythagorean Theorem: a2 + b2 = c2

function pythagoreanTheorem(a, b) {
    var cSquared = (a*a)+(b*b);
    var c = Math.sqrt(cSquared);
    return c;
}

pythagoreanTheorem(3, 4);

//6. Is X Evenly Divisible by Y?

function isXEvenlyDivisibleByY(x, y) {
    if ( x % y === 0 ) {
        return true;
    } else {return false;}
}

isXEvenlyDivisibleByY(99, 3);

//7. Vowel Count

function countVowels(word) {
    var vowelTotal = 0;
    for (i = 0; i <= word.length; i++) {
        if (word.charAt(i) === 'a') {
            vowelTotal ++;
        } else if (word.charAt(i) === 'e') {
            vowelTotal ++;
        } else if (word.charAt(i) === 'i') {
            vowelTotal ++;
        } else if (word.charAt(i) === 'o') {
            vowelTotal ++;
        } else if (word.charAt(i) === 'u') {
            vowelTotal ++;
        } else if (word.charAt(i) === 'y') {
            vowelTotal ++;
        }
    }
    return vowelTotal;
}

countVowels("stealing");

//8. Build an ASCII Triangle!

function printTriangle(length) {
    var star = '';
    for (num = 1; num <= length; num++) {
        star += '*';
        console.log(star);
    }
}

printTriangle(3);

//
