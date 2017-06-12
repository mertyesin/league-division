function getMiddle(str: string): string {
    return str[Math.floor(str.length/2)];
}

export {
    getMiddle
}

console.log(getMiddle("asdfgf"));