// TODO: add your solutions here!

function concatIt(a, b){
    return a+b;
}

function repeatIt(str , n){
    for(var i= 0; i< n; i++){
        console.log(str);
    }
}

function powerRangers(a,b){
    return a**b;
}

function circleThis(n){
    return 3.14*n*n;
}

function pythagoreanT(a,b){
    var c= Math.sqrt(a+b);
    return c**2;
}

function divisor(x,y){
    return x%y == 0;

}

    function countVowels(word) {
	var count = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
		}
	}
	return count;
}

function isThere(arr){
    return arr.includes('wdi');
}

function longestWord(str) {
	var longest = 0;
	var index = 0;
	var arr = sentence.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > longest) {
			longest = arr[i].length;
			index = i;
		}
	}
	return arr[index];
}

function triangleBuilder(n){
    for(var i=1; i<= n; i++){
        var asterisks = "";
        for(var j=0; j< i; j++){
            asterisks += "*";
        }
        console.log(asterisks);
    }

}