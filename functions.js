//1 Return a new string that is the combination of two arguments passed into the function
function combineWords(word1, word2) {
    return (word1 + word2);
}
console.log(combineWords('dog', 'house'));
// displays 'doghouse'


//2 Display an argument phrase to the console n times
function repeatPhrase(phrase, n) {
for (i = 0; i < n; i++) {
  console.log(phrase);
  }
}
repeatPhrase("Hello", 5);


//3 Return number power without using built-in Math functions

function toTheNthPower(number, power) {
    if (power === 0) {
        return 1;
    }
  else {
      return number * toTheNthPower(number, power - 1);
  }
}

toTheNthPower(4, 5);


//4 Return the area of a circle given the radius

function areaOfACircle(radius) {
  return (3.14 * radius * radius);
}

areaOfACircle(2);


//5 Pythagorean Theorem: a2 + b2 = c2
//Return c given a and b

function pythagoreanTheorem(a, b) {
    return Math.sqrt(((a * a) + (b * b)));
}

pythagoreanTheorem(3, 4);
// should display 5;
