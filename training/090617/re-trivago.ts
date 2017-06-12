function re_trivago(str: string, n: number): string {
    var obj = {};

    for (let s of str) {
        if(s == " "){
            // loop 'a devam et. (continue)
        }
        else if (obj[s] == undefined ) {
            obj[s] = 1;
        }
        else {
            obj[s] += 1;
        }
    }
    console.log(obj);

    var t = "";

    for(let s of str){
        if(obj[s] >= n){
            t += "*";
        }
        else{
            t += s;
        }
    }

    return t;
}

export {
    re_trivago
}

console.log(re_trivago("aaba kouq bux",3));