// TODO: add your solutions here!
// 1. Build your own concatentation
function combineWords(word1, word2) {
    console.log(word1 + word2);
}

combineWords('dog', 'house');

// 2. Repeat a phrase
function repeatPhrase(phrase, n) {
    for (var x =1; x <= n; x++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

//3. Build your own Power function
function toTheNthPower(number, power) {
    var x = 1;
    for( i = 1; i <= power; i++) {
      x *= number;
    }
    return x;
}


toTheNthPower(4, 5);

//4. Area of a circle: pI r*r
function areaOfACircle(radius) {
    var pI = 3.14;
    var area = pI * radius * radius;
    return area;
}

areaOfACircle(2);

// 5. Pythagorean Theorem: (a*a) + (b*b) = (c*c)
function pythagoreanTheorem(a, b) {
    var cSquared = Math.sqrt(a * a + b * b);
    return cSquared;
}

pythagoreanTheorem(3, 4);


// 6. Is X Evenly Divisible by Y?
function isXEvenlyDivisibleByY(x, y) {
    if( x % y === 0) {
        return x % y === 0;
    } else {
        return x % y === 0;
    }
}

isXEvenlyDivisibleByY(99, 3);

// 7. Vowel Count: 
function countVowels(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            count++;
        }
    }
    return count;
}

countVowels("aeiou");


//8. Build an ASCII Triangle
function printTriangle(length) {
    for(var i = 1; i <= length; i++) {
        var layer = '';

        for(var y = 0; y < i; y++) {
            layer += '*';
        }
        console.log(layer);
    }
}

printTriangle(3);


// 9. stretch challenge

function printTriangle(length) {
    for(var i = 1; i <= length; i++) {
        var layer = '';
        for(var z = length -i; z > 0; z--) {
            layer += ' ';
        }
        for(var y = 0; y < i; y++) {
            layer += ' * ';
        }
        console.log(layer);
    }
}

printTriangle(10);




