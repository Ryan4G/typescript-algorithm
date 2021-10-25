const produceNumberArray = function(length: number, min:number, max: number, fraction: number = 0){
    length = Math.floor(length);

    if (length < 1){
        throw new Error('The length of array should large than 1.');
    }

    fraction = Math.floor(Math.min(3, fraction));

    if (fraction < 0){
        fraction = 0;
    }

    let power = Math.pow(10, fraction);

    let nums = [];

    // limit min/max value range in [-100000, 100000]
    min = Math.max(-10e5, min) * power;
    max = Math.min(10e5, max) * power;

    while (length > 0){

        let rand = Math.floor(Math.random() * (max - min + 1) + min) / power;

        nums.push(rand)

        length--;
    }

    return nums;
}

export {
    produceNumberArray
}