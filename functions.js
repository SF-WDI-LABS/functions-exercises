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
}

areaOfACircle(2);
// displays approximately 12.57
