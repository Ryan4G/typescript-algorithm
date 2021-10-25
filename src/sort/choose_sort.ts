const choose_sort = function(list: Array<number>, desc: boolean = true) {
    let copy_list = [...list];

    let max = 0;

    let cmp = (a: number, b: number) => { return desc ? a < b : a > b };

    for(let i = 0; i < copy_list.length - 1; i++){
        max = i;

        for(let j = i + 1; j < copy_list.length; j++){
            if (cmp(copy_list[max], copy_list[j])) {
                max = j;
            }
        }

        if (max !== i){
            let tmp = copy_list[i];
            copy_list[i] = copy_list[max];
            copy_list[max] = tmp;
        }
    }

    return copy_list;
};

export default choose_sort;