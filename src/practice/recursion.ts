
const sum = (arr: Array<number>, total: number = 0) : number => {
    if (arr.length == 0){
        return total;
    }

    return sum(arr, arr.pop()! + total);
};

const count = (arr: Array<number>, total: number = 0) : number => {
    if (arr.pop() === undefined){
        return total;
    }

    return count(arr, total + 1);
};

const max = (arr: Array<number>, index: number = 0, max_index: number = 0) : number => {
    
    if (index === arr.length){
        return arr[max_index];
    }

    if (arr[index] >= arr[max_index]){
        max_index = index;
    }

    return max(arr, index + 1, max_index);
};

// actually it is a least common multiple algorithm
const max_grid_field = (width: number, height: number) : number => {

    if (width === height){
        return width;
    }

    if (width - height > 0){
        return max_grid_field(width - height, height);
    }
    else{
        return max_grid_field(width, height - width);
    }
};

export {
    sum,
    count,
    max,
    max_grid_field
};
