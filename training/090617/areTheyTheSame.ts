class G964 {
    public static comp(a1: number[], a2: number[]): boolean {

        if(a1.length !== a2.length)
            return false;

        for(let i=0;i<a1.length;i++){
            if(a2.indexOf(a1[i] * a1[i]) == -1){
                return false;
               }
        }
        return true;
    }
}

export {
    G964
}

var a1 = [1,2,3,4,5];
var a2 = [1,4,9,16,25];
console.log(G964.comp(a1, a2));