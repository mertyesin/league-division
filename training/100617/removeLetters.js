function removeLetters(str /*: string */, n /*: number */) {
    var obj = {}; // This object will keep each of the count of string elements. like => { a: 3, b: 2, k: 1, o: 1, u: 2, q: 1, x: 1 }

    for (let s of str) { // filling obj
        if(s == " "){
            continue; //ignore whitespace character. Continue to loop.
        }
        else if (obj[s] == undefined ) {
            obj[s] = 1;
        }
        else {
            obj[s] += 1;
        }
    }

    var output = ""; // Output will be written here.

    for(let s of str){
        if(obj[s] >= n){  // Count of letter is bigger than given number 'n' ?
            output += "";
        }
        else{
            output += s;
        }
    }

    return output;
}

// My Test Cases
console.log(removeLetters("cccva hngjjk",2)); // returns "va hngk"
console.log(removeLetters("cccva hngjjk",3)); // returns "va hngjjk"
console.log(removeLetters("cccva hngjjkyyyy",4)); // returns "cccva hngjjk"
