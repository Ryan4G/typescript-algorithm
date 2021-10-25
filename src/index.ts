import { binary_search, binary_search_recursion } from './search/binary_search';
import { produceNumberArray } from './common/produce';
import choose_sort from './sort/choose_sort';
import { sum, count, max, max_grid_field } from './practice/recursion';
import quick_sort from './search/quick_sort';

const bodyFunc = () => {
    let arr = produceNumberArray(10, 1, 50, 0);
    let target = 33;

    console.log('Array:', arr);

    let sorted_arr = quick_sort(arr, false);

    console.log('Sorted Array:', sorted_arr);

    console.log()

    let idx = binary_search_recursion(sorted_arr, target);
    
    console.log('Target Index:', idx);

    //console.log(max(arr));

    console.log();

};

console.log('Begin...');

bodyFunc();

console.log('End...');