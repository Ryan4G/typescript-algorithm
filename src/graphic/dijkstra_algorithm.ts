import graphic from "./graphic";
import IMap from "../common/interface/IMap";

const dijkstra = (g: graphic, srcNode: string, desNode: string) : Array<string> => {
    let arr : Array<string> = [];

    let parents : IMap<string> = {};
    let costs : IMap<number> = {};
    // the nodes have searched
    let searched : Array<string> = [];

    let nodes = g.getNodes();

    // init hash tables
    nodes.forEach(n => {
        if (srcNode !== n){
            parents[n] = '';
            costs[n] = Infinity;
        }
    });

    let children = g.getChildren(srcNode);

    children?.forEach(child => {
        parents[child] = srcNode;
        costs[child] =  g.getPathCost(srcNode, child);
    });

    let node = find_lowest_node(searched, costs);

    while (node != undefined) {

        let node_cost = costs[node];
        let node_children = g.getChildren(node);

        // find next child / (also called neighbor)
        node_children?.forEach(c => {
            let child_cost = node_cost + g.getPathCost(node!, c);

            // THIS PATH COST LOWER
            if (child_cost < costs[c]){
                costs[c] = child_cost;
                parents[c] = node!;
            }
        });

        searched.push(node);

        node = find_lowest_node(searched, costs);
    }

    console.log(parents);
    
    if (parents[desNode] != ''){

        arr.push(desNode);

        let parentNode = parents[desNode];

        while(parentNode !== undefined){
            arr.push(parentNode);
        
            parentNode = parents[parentNode];
        }

    }

    return arr.reverse();
}

const find_lowest_node = (searched: Array<string>, costs: IMap<number>): string | undefined => {
    let lowest : string | undefined = undefined;

    let keys = Object.keys(costs);
    let lowest_cost = Infinity;

    keys.forEach(k => {
        if (costs[k] < lowest_cost && !searched.some(s => s === k)){
            lowest_cost = costs[k];
            lowest = k;
        }
    });

    return lowest;
};

export default dijkstra;