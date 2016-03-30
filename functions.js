// 1 Build your own concatentation

function combineWords(word1,word2){
  console.log('Who let the '+ word1 +' in the '+word2);
}
combineWords('dog', 'house');

// 2 Repeat a phrase

function repeatPhrase(phrase, n){
var counter = 0;
  while(counter < n){
    console.log(phrase);
    counter++;
  }
}

// 3 Build your own Power function
function toTheNthPower(number, power){
var count = 0; result = 1;
  while(count < power){
    count++;
    result *= number;
  }
  return result;
}

toTheNthPower(4,5);

// 4 Area of a  circle:
function areaOfaCircle(radius){
  return radius*radius*3.14159
};
areaOfaCircle(2);

// 5  Pythagorean Theorem: a2 + b2 = c2 rewrite the below is wrong
function pythagoreanTheorem(a,b){
  var c = (a*a) + (b * b);
  c = Math.sqrt(c);
  return c;
}

pythagoreanTheorem(3, 4);
// should display 5;

// 6) is X Evenly Divisible by Y

function isXEvenlyDivisibleByY(x, y) {
  if(x%y === 0){
    console.log('true');
  }
}
isXEvenlyDivisibleByY(99, 3);

// 7) Vowel count
function countVowels(word) {
  var vowels = word
  vowels = word.match(/(a|e|i|o|u)/gi);
  return vowels.length;
}
countVowels("stealing");
// displays 3

// 8. Build an ASCII Triangle!
function printTriangle(length) {
  var star = '*', stars='', count =0;
  while(count<length){
    count++;
    stars += star;
    console.log(stars)
  }
}
printTriangle(3);
