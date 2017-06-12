function camelCase(str: string): number {
    let numberOfLetter: number = 1;

    for(let s of str){
        if(s === s.toUpperCase()){
            numberOfLetter++;
        }
    }
    return numberOfLetter;
 }

export {
    camelCase
}

console.log(camelCase("saveChangesInTheEditor"));