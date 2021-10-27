class Goods{
    constructor(public name: string, public value: number, public weight: number){

    }
}

const bag_problem = () => {
    let goodsList : Array<Goods> = [];
    goodsList.push(new Goods('Guitar', 1500, 1)); 
    goodsList.push(new Goods('Bass', 3000, 4)); 
    goodsList.push(new Goods('Laptop', 2000, 3)); 
    goodsList.push(new Goods('Iphone', 2000, 1)); 

    let hashGood : string[][] = [];
    let hashValue: number[][] = [];

    for(let i = 0; i < goodsList.length; i++){
        let rowGood: string[] = [];
        let rowValue: number[] = [];

        let currentGood = goodsList[i];

        for(let j = 0; j < 4; j++){
            
            if (i < 1){
                if (currentGood.weight <= j + 1){
                    rowGood.push(currentGood.name);
                    rowValue.push(currentGood.value);
                }
                else{
                    rowGood.push('');
                    rowValue.push(0);
                }
            }
            else{
                let preValue = hashValue[i - 1][j];
                let remainValue =  ((j - currentGood.weight < 0 ) ? 0 : hashValue[i - 1][j - currentGood.weight]);
                let currValue = ((j + 1 >= currentGood.weight) ? currentGood.value : 0) + remainValue;
                
                if (preValue >= currValue + remainValue){
                    rowGood.push(hashGood[i - 1][j]);
                    rowValue.push(preValue);
                }
                else{
                    if (remainValue != 0){
                        rowGood.push(`${currentGood.name},${hashGood[i - 1][j - currentGood.weight]}`);
                    }
                    else{
                        rowGood.push(currentGood.name);
                    }
                    
                    rowValue.push(currValue);
                }
            }
        }

        hashGood.push(rowGood);
        hashValue.push(rowValue);
    }

    console.log(hashGood);
    console.log(hashValue);
    let normalize_hash_value = normalize(hashValue);
    
    let max_value = normalize_hash_value[0];
    let max_idx = 0;

    for(let i = 1; i < normalize_hash_value.length; i++){
        if (max_value < normalize_hash_value[i]){
            max_value = normalize_hash_value[i];
            max_idx = i;
        }
    }

    let normalize_hash_good = normalize(hashGood);

    console.log('Here is the most valueable combine:');
    console.log(normalize_hash_good[max_idx], max_value);
};

const normalize = <T>(arr: T[][]) : Array<T> => {
    let reArr : Array<T> = [];

    arr.forEach(row => {
        reArr.push(...row);
    });

    return reArr;
};

export {
    bag_problem
}