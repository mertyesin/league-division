/*
 1- Kodu nodeJs yüklü bir bilgisayar'da ->
    - $ node removeLetters -  komutuyla terminal'de çalıştırabilirsiniz.

 2- Chrome konsoluna copy-paste yaparak çalıştırabilirsiniz.
*/

/*
 Question Explanation =>
     Tekrar sayısı “2” verildiğinde, ‘a’,‘b’ ve ‘u’ harfleri çıkarılacak, sonuç: “koq x”
     Tekrar sayısı “3” verildiğinde, ‘a’ harfi çıkarılacak, sonuç: “b kouq bux”
     Tekrar sayısı “4” verildiğinde, hiç bir harf çıkarılmayacak, sonuç: “aaba kouq bux”
 */

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

// Your Test Cases
console.log(removeLetters("aaba kouq bux",2)); // returns " koq x"
console.log(removeLetters("aaba kouq bux",3)); // returns "b kouq bux"
console.log(removeLetters("aaba kouq bux",4)); // returns "aaba kouq bux"

// My Test Cases
console.log(removeLetters("cccva hngjjk",2)); // returns "va hngk"
console.log(removeLetters("cccva hngjjk",3)); // returns "va hngjjk"
console.log(removeLetters("cccva hngjjkyyyy",4)); // returns "cccva hngjjk"
