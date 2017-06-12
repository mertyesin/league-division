function reverser(str: string): string {

    var strArr = str.split("");
    strArr.reverse();
    str = strArr.join("");

    return str;
}

export {
    reverser
}

console.log(reverser("abcdefg"));