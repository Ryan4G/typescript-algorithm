import { binary_search, binary_search_recursion } from './search/binary_search';
import { produceNumberArray } from './common/produce';
import choose_sort from './sort/choose_sort';
import { sum, count, max, max_grid_field } from './practice/recursion';
import quick_sort from './search/quick_sort';
import { find_prime } from './practice/quest';
import graphic from './graphic/graphic';
import { breadth_first_search } from './graphic/breadth_first_search';
import dijkstra from './graphic/dijkstra_algorithm';

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

    let maxnum = 100;

    console.log(`Those Prime Number Below ${maxnum} are:`);

    console.log(find_prime(maxnum));

    console.log();

    let g = new graphic();

    g.appendPath('YOU', 'ALICE', 1);
    g.appendPath('YOU', 'BOB', 1);
    g.appendPath('YOU', 'CLAIRE', 1);
    g.appendPath('ALICE', 'PEGGY', 1);
    g.appendPath('BOB', 'PEGGY', 1);
    g.appendPath('BOB', 'ANUJ', 1);
    g.appendPath('CLAIRE', 'JONNY', 1);
    g.appendPath('CLAIRE', 'THOM', 1);

    g.printGraphic();

    console.log(breadth_first_search(g, 'YOU', 'PEGGY').join('->'));

    
    let g2 = new graphic();

    g2.appendPath('A', 'B', 1);
    g2.appendPath('A', 'C', 1);
    g2.appendPath('C', 'D', 1);
    g2.appendPath('D', 'E', 1);
    g2.appendPath('B', 'E', 1);
    g2.appendPath('C', 'F', 1);
    g2.appendPath('F', 'E', 1);
    g2.appendPath('E', 'G', 1);

    g2.printGraphic();

    console.log(breadth_first_search(g2, 'A', 'G').join('->'));

    console.log();

    let g3 = new graphic();

    g3.appendPath('START', 'A', 10);
    g3.appendPath('A', 'B', 20);
    g3.appendPath('B', 'C', 1);
    g3.appendPath('C', 'A', 1);
    g3.appendPath('B', 'END', 30);

    console.log(dijkstra(g3, 'START', 'END').join('->'));
};

console.log('Begin...');

bodyFunc();

console.log('End...');