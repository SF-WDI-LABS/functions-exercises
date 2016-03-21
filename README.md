## Exercises - Javascript Functions

Fork this repository to your GitHub account, then clone your GitHub copy onto your computer. 

You'll be filling in a bunch of empty function definitions. Type each function definition into the snippet, then add the rest of the code to make the function work. 

After you implement a function successfully in your snippet, copy it over into the `functions.js` file.  Unless a different behavior is specified, have the function log the answer to the console AND return it. 

When class ends, push your work to GitHub and open a pull request to the class functions-exercises repo!

For some of the problems, you'll have to use functions or other variables supplied by JavaScript's built-in `Math` object.  [Here is the documentation on using the `Math` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

**Example Usage of `Math`**
```javascript
	var absoluteValue = Math.abs(-4);
	// evaluates to 4
	
	var fourSquared = Math.pow(4, 2);
	// evaluates to 16
	
	var roundedToNearestInteger = Math.round(1.22343);
	// evaluates to 1
```


## Function Definitions!


### 1.  Build your own concatentation
Return a new string that is the combination of two arguments passed into the function 

**Example: `dog` and `house` will display `doghouse`**

```javascript
function combineWords(word1, word2) {
	// TODO: Place your code here
}

combineWords('dog', 'house');
// displays 'doghouse'
```

### 2.  Repeat a phrase
Display an argument phrase to the console n times

```javascript
function repeatPhrase(phrase, n) {
	// TODO: Place your code here
}

repeatPhrase("Hello", 5);
// displays 
// Hello
// Hello
// Hello
// Hello
// Hello
```

### 3.  Build your own Power function
Return number <sup>power</sup> *without* using built-in `Math` functions

**Example**:   
**4<sup>5</sup> = 4 * 4 * 4 * 4 * 4 = 1024**

```javascript
function toTheNthPower(number, power) {
	// TODO: Place your code here		
}

toTheNthPower(4, 5);
// displays 1024
```

### 4. Area of a circle:  &pi; r<sup>2</sup>
Return the area of a circle given the radius  
[background information](http://www.mathgoodies.com/lessons/vol2/circle_area.html)

```javascript
function areaOfACircle(radius) {
	// TODO: Place your code here
}

areaOfACircle(2);
// displays approximately 12.57
```


### 5.  Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
Return c given a and b  
[background information](https://en.wikipedia.org/wiki/Pythagorean_theorem)

```javascript
function pythagoreanTheorem(a, b) {
	// TODO: Place your code here
}

pythagoreanTheorem(3, 4);
// should display 5;
```

###  6. Is X Evenly Divisible by Y ?
Return a boolean value whether or not X can be divided by Y without any remainders.  

*Hint: Explore the world of Modulus operators!*

```javascript
function isXEvenlyDivisibleByY(x, y) {
	// TODO: Place your code here
}

isXEvenlyDivisibleByY(99, 3);
// displays true
```



### 7.  Vowel Count:
Return the number of occurences of vowels in a word.
Vowels are `a`, `e`, `i`, `o`, `u`, and `y`

```javascript
function countVowels(word) {
	// TODO: Place your code here
}

countVowels("stealing");
// displays 3
```
*Challenge: Can you alter the code to count both upper case AND lower case?*



### 8. Build an ASCII Triangle!
Display a simple triangle with asterisks

**Example:   
printTriangle(5)**

```javascript
*
**
***
****
*****
```

```javascript
function printTriangle(length) {
	// TODO: Place your code here
}

printTriangle(3);
// displays
// *
// **
// ***
```

### 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid? 
**Example:  printPyramid(10);**

```javascript
           *
          * *
         * * *
        * * * *
       * * * * *
      * * * * * *
     * * * * * * *
    * * * * * * * * 
   * * * * * * * * *
  * * * * * * * * * *
```

*Warning: This is a surprisingly tricky interview-level exercise.  Try at your own risk!*

```javascript
function printPyramid(length) {
	// TODO: Place your code here
}
```

