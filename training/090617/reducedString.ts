function reducedString(str: string): string {
    let m = {};
    // Creates object that holds the count of letters
    for (let s of str) {
        if (m[s] == undefined) {
            m[s] = 1;
        } else {
            m[s] += 1;
            if (m[s] == 2) {
                for (let i = 0; i < 2; i++) {
                    str = str.replace(s, '');
                }
                m[s] = undefined;
            }
        }
    }
    if(str == ""){
        return "Empty String";
    }
    else{
        return str;
    }
}
export {
    reducedString
}

console.log(reducedString("aavvbgddffg"));

// kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu
// kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuersanpdtmrzibswswzbjqytgfewi