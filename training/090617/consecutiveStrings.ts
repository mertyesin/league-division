export class G964 {
    public static longestConsec(strarr: Array<string>, k: number) {
        if (k > strarr.length) {
            return '';
        }

        let longestString = '';
        for (let i = 0; i < strarr.length; i++) {
            let finalString = '';
            for (let j = 0; j < k; j++) {
                finalString += strarr[j + i] || '';
            }
            if (longestString.length < finalString.length) {
                longestString = finalString;
            }
        }

        return longestString;
    }
}

console.log(G964.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));