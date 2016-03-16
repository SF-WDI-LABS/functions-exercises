// 1
function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');

// 2
function repeatPhrase(phrase, n) {
   var i;
   for(i = 0; i < n; i++) {
       console.log(phrase);
   }
}

repeatPhrase("Hello", 5);

// 3
function toTheNthPower(number, power) {
    var numberPower = 1;
    var i;
    for (i = 0; i < power; i++){
        numberPower *= number;
    }
    return numberPower;
}

toTheNthPower(4, 5);

//4
function areaOfACircle(radius) {
    var pi = 3.14;
    return radius * radius * pi;
}

areaOfACircle(2);

//5
function pythagoreanTheorem(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

pythagoreanTheorem(3, 4);

//6
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        return true;
    } else {
        return false;
    }
}

isXEvenlyDivisibleByY(99, 3);

// 7
function countVowels(word) {
    var numberOfVowels = 0;
    var i;
    for (i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}

countVowels("stealing");

// 8
function printTriangle(length) {
    var row = "";
    var i;
    for (i = 0; i < length; i++) {
        console.log(row += "*");
    }
}

printTriangle(3);
