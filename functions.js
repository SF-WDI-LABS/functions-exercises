// TODO: add your solutions here!
//1
function combineWords(word1, word2) {
  console.log (word1+word2);
}
combineWords('dog', 'house');

//2
function repeatPhrase(phrase, n) {
    for (var i=0; i<n; i++) {
        console.log(phrase);
    }
}
repeatPhrase("pew", 5);

//3
function toTheNthPower(number, power) {
  var result = 1;
  for(var i = 0; i < power; i++) {
    result *= number;
  }
  console.log(result);
  return result;
}
toTheNthPower(4,5);


//4
function areaOfACircle(radius) {
  var r = (radius * radius);
  console.log(Math.PI *r);

}
areaOfACircle(2);

//5
function pythagoreanTheorem(a, b) {
    var x = (a * a);
    var y = (b * b);
    var z = (x + y);
    console.log(Math.sqrt(z));
}
pythagoreanTheorem(3,4);

//6
function isXEvenlyDivisibleByY(x, y){
    var z = (x % y);
    if (z === 0 ){
        console.log('true');
    }
    else {
        console.log('false');
    }

}
isXEvenlyDivisibleByY(99, 3);

//7
function countVowels(word) {
	var count = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
		}
	}
	console.log(count);
}
countVowels("stealing");

//8
function printTriangle(length) {
   for (var i = 1; i <= length; i++) {
       var tier = '';

    for (var j = 0; j < i; j++) {
        tier += '*';
    }
    console.log(tier);
   }
}
printTriangle(3);

//9
function printPyramid(length) {
/* I have no idea, but I will look at the solution later to make sense of this */    
}
