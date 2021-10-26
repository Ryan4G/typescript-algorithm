const find_prime = (max: number) : Array<number> => {
    let arr : Array<number> = [];

    for(let i = 2; i <= max; i++){
        if (is_prime(i)){
            arr.push(i);
        }
    }

    return arr;
};

const is_prime = (num: number) : boolean=> {
    
    // it means 2, 3 
    if (num < 4){
        return num > 1;
    }
    
    if (num % 2 === 0 || num % 3 === 0){
        return false;
    }

    for(let i = 5; i * i <= num; i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

export {
    find_prime,
    is_prime
}