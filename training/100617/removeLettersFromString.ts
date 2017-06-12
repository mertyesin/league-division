/*
    Kod -Typescript- isimli javascript'te type-check'in daha kolay yapılabilmesini sağlamak amacıyla kullanılan bir süper-set'te
    yazıldı. Ts kodu compile edildiğinde



*/
/*
  Question Explanation =>
      Tekrar sayısı “2” verildiğinde, ‘a’,‘b’ ve ‘u’ harfleri çıkarılacak, sonuç: “koq x”
      Tekrar sayısı “3” verildiğinde, ‘a’ harfi çıkarılacak, sonuç: “b kouq bux”
      Tekrar sayısı “4” verildiğinde, hiç bir harf çıkarılmayacak, sonuç: “aaba kouq bux”
 */

function removeLettersFromString(str: string, n: number): string {
    var obj = {}; // This object will keep each of the count of string elements. like => { a: 3, b: 2, k: 1, o: 1, u: 2, q: 1, x: 1 }

    for (let s of str) {
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

export {
    removeLettersFromString
}

// Test Cases
console.log(removeLettersFromString("aaba kouq bux",2)); // returns " koq x"
console.log(removeLettersFromString("aaba kouq bux",3)); // returns "b kouq bux"
console.log(removeLettersFromString("aaba kouq bux",4)); // returns "aaba kouq bux"