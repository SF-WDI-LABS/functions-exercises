// TODO: add your solutions here!
function combineWords(word1, word2) {
    console.log(word1 + word2);
}

combineWords('dog', 'house')

function repeatPhrase(phrase, n) {
    for (i = 0; i < n; i++){
        console.log(phrase);
    }
}

repeatPhrase ("Hello", 5);

function toTheNthPower(number, power) {
    var product = 1;
    if (power >= 0) {
        for(i = 0; i < power; i++){
            product = product * number;
        }
        return product;
    }
    else {
        for(i = 0; i > power; i--){
            product = product * number;
        }
        return 1 / product;
    }
}

toTheNthPower(4, 5);

function areaOfACircle(radius) {
    return (2 * 3.14159 * radius);
}

areaOfACircle(2);

function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

pythagoreanTheorem(3, 4);

function isXEvenlyDivisibleByY(x, y) {
    return (x % y === 0);
}

isXEvenlyDivisibleByY(99, 2);

function isVowel(letter) {
    var vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
    return (vowels.indexOf(letter) > -1);
}

function countVowels(word) {
    var vowelCount = 0;
    for (i = 0; i < word.length; i++){
        if (isVowel(word[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}

countVowels("Arthur");

function printTriangle(length) {
    for(i = 1; i <= length; i++) {
        var string = "";
        for(n = 1; n <= i; n++){
            string = string.concat("*");
        }
        console.log(string);
    }
}

printTriangle(5);

function printPyramid(length) {
    for(i = 1; i <= length; i++) {
        var string = "";
        for(m = length - i; m > 0; m--){
            string = string.concat(" ");
        }
        for(n = 1; n <= i; n++){
            string = string.concat("* ");
        }
        console.log(string);
    }
}

printPyramid(5);
