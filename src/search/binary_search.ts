const binary_search = function(list: Array<number>, target: number){
    let min = 0;
    let max = list.length;
    let mid = Math.floor((min + max) / 2);

    while (min <= max){

        if (list[mid] === target){
            return mid;
        }

        if (list[mid] > target){
            max = mid - 1;
        }
        else if (list[mid] < target){
            min = mid + 1;
        }

        mid = Math.floor((min + max) / 2);
    }

    return undefined;
}

const binary_search_recursion = (list: Array<number>, target: number, min: number = 0, max: number = list.length) : number | undefined => {

    if (min > max){
        return undefined;    
    }

    let mid = Math.floor((min + max) * 0.5);

    if (list[mid] == target){
        return mid;
    }
    else{
        if (list[mid] > target){
            max = mid - 1;
        }
        else{
            min = mid + 1;
        }
    }

    return binary_search_recursion(list, target, min, max);
};

export {
    binary_search,
    binary_search_recursion
}