// TODO: add your solutions here!
# Build your own concatentation

function combineWords(word1, word2) {
    // TODO: Place your code here
    console.log(word1,word2)
}

combineWords('dog', 'house');
// displays 'doghouse'


# 3. Build your own Power function

function repeatPhrase(phrase, n) {
    // TODO: Place your code here
    while (n > 0){
      n=n-1;
      console.log(phrase);
    }
}

repeatPhrase ("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello


# 3. Build your own Power function

function toTheNthPower(number, power) {
    // TODO: Place your code here
    var number2 =number;
   while (power > 1) {
     number2 = number * number2;
     power= power - 1;
     console.log(number2);
   }

}

toTheNthPower(4, 5);
// displays 1024

# 4. Area of a circle: π r2

function areaOfACircle(radius) {
    // TODO: Place your code here
    var result;
    var omg=3.14;

    result=omg*(radius*radius);
    console.log(result);
}

areaOfACircle(2);
// displays approximately 12.57

# 5. Pythagorean Theorem: a2 + b2 = c2

function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var result1;
    var result;
    result1 = (a * a) + (b * b);
    result = Math.sqrt(result1);

    console.log(result);
}

pythagoreanTheorem(3, 4);
// should display 5;

# 6. Is X Evenly Divisible by Y ?

Return a boolean value whether or not X can be divided by Y without any remainders.

Hint: Explore the world of Modulus operators!

function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    if (x % y === 0){
    console.log("True");

    }
}

isXEvenlyDivisibleByY(99, 3);
// displays true


# 7. Vowel Count:

function countVowels(word) {
    // TODO: Place your code here
    var count=0;
    for (var i = 0; word.length > i; i++){
      if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" && word[i] == "y" ){
      count=count+1;
    }

}
console.log(count);
}

  countVowels("stealing");
    // displays 3

# 8. Build an ASCII Triangle!

function printTriangle(length) {
    // TODO: Place your code here
    star="*";
    stars="";
    for (var i = 0; i < length; i++){

      stars +=star;
    console.log(stars);
    }
}

printTriangle(3);
// displays
// *
// **
// ***

# 9 Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
/* can't even think about how to get it to work */
function printPyramid(length) {
    // TODO: Place your code here

    var space = " ";
    var spaces= "                 ";
    var star = "* ";
    var stars = "";

   for (var i = 0; length > i; i++){
        stars+=star;
       for (var s = length; s > 0; s--) {
          spaces-=space;
           console.log(spaces,stars);
       }

   }
  }





  printPyramid(10);
