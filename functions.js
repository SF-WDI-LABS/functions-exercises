// TODO: add your solutions here!

//1.
function combineWords(word1,word2){
    var x = word1 + word2;
    return x;
}
combineWords('dog','house');

//2.
function repeatPhrase(phrase,n){
    for (var i = 0; i < n; i++){
      console.log(phrase);
    }
}
repeatPhrase("Hello",5);

//3.
function toTheNthPower(number, power) {
	 var result = 1;
	 for(var i = 0; i < power; i++) {
		result *= number;
	}
	console.log(result);
	return result;
}

//4
function areaOfACircle(radius) {
   var area = 3.1425 * (radius * radius); {
       return(area);
   }
}
areaOfACircle(2);

//5
function pythagoreanTheorem(a, b) {
    var s = (a*a);
    var d = (b*b);
    var y = (s+d);
    var x = Math.sqrt(y);
    return x;
}
pythagoreanTheorem(3,4);

//6
function isXEvenlyDivisibleBy (x, y) {
    var z = x%y === 0;
    var result = z;
    return result;
}

isXEvenlyDivisibleBy (99,3);

//7
function countVowels(word) {
    var count = 0;
    word = word.toLowerCase();
    for (i=0; i<word.length; i++);
    {
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;}

			return count;}
    }
countVowels("stealing");

//8
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var tier = '';

		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}
}

//9
function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
		}
		for(var k = 0; k < i; k++) {
			tier += '* ';
		}
		console.log(tier);
	}
}
