import IMap from "../common/interface/IMap";

class graphic {
    private _nodes: Array<string>;
    private _paths: IMap<number>;
    private _graphic: IMap<Array<string>>;

    constructor(){
        this._nodes = [];
        this._paths = {};
        this._graphic = {};
    }

    getNodes(){
        return this._nodes;
    }

    getChildren(node: string){
        return this._graphic[node];
    }

    appendPath(n1: string, n2: string, val: number){
        if (!this._nodes.some(v=> v === n1)){
            this._nodes.push(n1);
        }
        
        if (!this._nodes.some(v=> v === n2)){
            this._nodes.push(n2);
        }
        
        let key = `${n1}->${n2}`;
        this._paths[key] = val;

        if (this._graphic[n1] === undefined){
            this._graphic[n1] = [];
        }

        if (!this._graphic[n1].some(v => v === n2)){
            this._graphic[n1].push(n2);
        }
    }

    printGraphic(){

        let pathArr: Array<string> = [];

        this._nodes.forEach(node => {
            let children = this._graphic[node];

            children?.forEach(child => {
                let key = `${node}->${child}`;

                pathArr.push(`${key}, ${this._paths[key]}`);
            });
        });
    }

    getPathCost(n1: string, n2: string): number{
        let key = `${n1}->${n2}`;

        return this._paths[key] === undefined ? Infinity : this._paths[key];
    }
}

export default graphic;