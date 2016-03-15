
function combineWords(word1, word2) {
	newphrase=word1+word2;
	console.log(newphrase);
	return newphrase;
}

combineWords('dog', 'house');
// displays 'doghouse'

function repeatPhrase(phrase, n) {
	for(var i=0;i<n;i++){
	console.log(phrase)
}
	return phrase
}

repeatPhrase ("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello


function toTheNthPower(number, power) {
	console.log(Math.pow(number,power));
	return Math.pow(number,power);
}

toTheNthPower(4, 5);
// displays 1024


function areaOfACircle(radius) {
	area=Math.PI*radius*radius;
	console.log(area);
	return area;
}

areaOfACircle(2);
// displays approximately 12.57

function pythagoreanTheorem(a, b) {
	C=Math.hypot(a,b);
	console.log(C);
	return C;
}

pythagoreanTheorem(3, 4);
// should display 5;

function isXEvenlyDivisibleByY(x, y) {
    modulus=!(x%y);
	console.log(modulus);
	return modulus;
}

isXEvenlyDivisibleByY(99, 3);

function countVowels(word) {
		var vowels = 0;
		word = word.toLowerCase();
		for (i=0; i<word.length; i++){
			if(word[i]==="a" || word[i]==="e" || word[i]==="i" || word[i]==="o" || word[i]==="u"){
				vowels++;
			}
		}
		console.log(vowels);
		return vowels;
}

countVowels("stealing");
// displays 3

function countVowels(word) {
		var vowels = 0;
		word=word.split(word);
		for (i=0; i<word.length; i++){
			if(word[i]==="a" || word[i]==="e" || word[i]==="i" || word[i]==="o" || word[i]==="u" || word[i]==="A" || word[i]==="E" || word[i]==="I" || word[i]==="O" || word[i]==="U"){
			vowels++;
			}
		}
		}
		console.log(vowels);
		return vowels;
}

function printTriangle(length) {
    for(i=1;i<=length;i++){
		var display ="";
		for(n=0;n<i;n++){
			display += "*";
		}
     console.log(display);
    }

}

printTriangle(3);
// displays
// *
// **
// ***
```
