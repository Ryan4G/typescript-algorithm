import graphic from "./graphic";
import IMap from "../common/interface/IMap";

const breadth_first_search = (g: graphic, srcNode: string, desNode: string) : Array<string> => {
    let arr : Array<string> = [];

    let queue : Array<string> = [];
    queue.push(srcNode);

    let searched : Array<string> = [];

    let parentHash : IMap<string | undefined> = {};

    parentHash[srcNode] = undefined;

    let findResult = false;

    while(queue.length > 0){
        let node = queue.shift();

        if (node){
            if (node === desNode){
                findResult = true;
                break;
            }

            let children = g.getChildren(node);

            if (children){
                children.forEach(s => {
                    if (!searched.some(n => n === s)){
                        queue.push(s);
                        searched.push(s);

                        parentHash[s] = node!;
                    }
                });
            }
        }
    }

    if (findResult){
        arr.push(desNode);

        let parentNode : string | undefined = parentHash[desNode];

        while(parentNode !== undefined){
            arr.push(parentNode);
            parentNode = parentHash[parentNode];
        }
    }
    return arr.reverse();
};

export {
    breadth_first_search
};