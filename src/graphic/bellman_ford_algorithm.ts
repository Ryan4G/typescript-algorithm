import IMap from "../common/interface/IMap";
import graphic from "./graphic";

// support negative weight
const bellman_ford_algorithm = (g: graphic, srcNode: string, desNode: string) : Array<string> => {
    let arr : Array<string> = [];

    let parents : IMap<string> = {};
    let distance : IMap<number> = {};

    let nodes = g.getNodes();

    // init hash tables
    nodes.forEach(n => {
        parents[n] = '';
        distance[n] = Infinity;
    });

    distance[srcNode] = 0;

    let times = 0;

    while(times++ < nodes.length - 1){

        for(let i in nodes){

            let node = nodes[i];
            let node_cost = distance[node];
            let node_children = g.getChildren(node);

            // find next child / (also called neighbor)
            node_children?.forEach(c => {
                let child_cost = node_cost + g.getPathCost(node!, c);

                // THIS PATH COST LOWER
                if (child_cost < distance[c]){
                    distance[c] = child_cost;
                    parents[c] = node!;
                }
            });

            // console.log(node,node_cost,JSON.stringify(distance));
        }
    }

    for(let i in nodes){
            
        let node = nodes[i];
        let node_cost = distance[node];
        let node_children = g.getChildren(node);

        for(let j in node_children){

            let c = node_children[i];
            let child_cost = node_cost + g.getPathCost(node!, c);

            // THIS PATH COST LOWER
            if (child_cost < distance[c]){
                throw new Error('Graph contains a negative-weight cycle')
            }
        }
    }

    //console.log(distance, parents)
    if (parents[desNode] != ''){

        arr.push(desNode);

        let parentNode = parents[desNode];

        while(parentNode){
            arr.push(parentNode);
        
            parentNode = parents[parentNode];
        }

    }

    return arr.reverse();
}

export default bellman_ford_algorithm;