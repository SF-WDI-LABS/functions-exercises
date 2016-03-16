// TODO: add your solutions here!


function combineWords(word1, word2) {
    console.log(word1+word2);
    return word1+word2;
}
combineWords('dog', 'house');



function repeatPhrase(phrase, n) {
    for(var count = 1; count <= n; count++) {
      console.log(phrase);
    }
}
repeatPhrase("Hello", 5);




function toTheNthPower(number, power) {
   var numResult=1;
   for (var i=1; i<=power; i++) {
     numResult*=number;
   }
   console.log(numResult);
   return numResult;
}
toTheNthPower(4, 5);



function areaOfACircle(radius) {
    var rSquared = radius*radius;
    console.log("R^2 = " + rSquared);
    var areaOfACircle=3.14159*rSquared;
    console.log(areaOfACircle);
    return areaOfACircle;
}
areaOfACircle(2);




function pythagoreanTheorem(a,b) {
  var c = (a*a) + (b*b);
  c = Math.sqrt(c);
  console.log(c);
  return c;
}
pythagoreanTheorem(3, 4);



function isXEvenlyDivisibleByY(x, y) {
	var solution = x % y === 0;
	console.log(result);
	return result;
}
isXEvenlyDivisibleByY(99, 3);





function countVowels(word) {
	var increment = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' ||
    word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			increment++;
		}
	}
	console.log(increment);
	return increment;
}
countVowels("stealing");





function printTriangle(length) {
	for(var i = 0; i <= length; i++) {

		var triangle = '';

		for(var x = 0; x<=i; x++) {
			triangle += '*';
		}

		console.log(triangle);

	}
}
printTriangle(5);



function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tree = '';

		for(var x = length-i; x > 0; x--) {
			tree += ' ';
		}
		for(var y = 0; y<i; y++) {
			tree += '* ';
		}
		console.log(tree);
	}
}
printPyramid(10);
