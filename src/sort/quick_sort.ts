const quick_sort = (arr: Array<number>, asc: boolean = true): Array<number> =>{
    
    // base-line condition
    if (arr.length < 2){
        return arr;
    }

    let less = [];
    let large = [];

    const cmp = (a:number, b:number) => asc ? a < b : a > b;

    let priovt = Math.floor(arr.length * 0.5);

    for(let i = 0, base = arr[priovt]; i < arr.length; i++){
        if (i == priovt){
            continue;
        }

        if (cmp(arr[i], base)){
            less.push(arr[i]);
        }
        else{
            large.push(arr[i]);
        }
    }

    return [...quick_sort(less, asc), arr[priovt], ...quick_sort(large, asc)]; 
};

export default quick_sort;