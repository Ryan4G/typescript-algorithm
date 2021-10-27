import IHash from "../common/interface/IHash";
import IMap from "../common/interface/IMap";

const radio_cover_problem = ()=>{

    let covered_need = ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"];

    let final_stations : Array<string> = [];

    let stations : IMap<Array<string>> = {};

    stations["kone"] = ["id", "nv", "ut"];
    stations["ktwo"] = ["wa", "id", "mt"];
    stations["kthree"] = ["or", "nv", "ca"];
    stations["kfour"] = ["nv", "ut"];
    stations["kfive"] = ["ca", "az"];

    let i = 0;

    while (i < 10 && covered_need.length > 0) {

        let best_station = "";
        let state_covered : Array<string> = [];
    
        for(let key of Object.keys(stations)){
            
            //console.log(key);

            let s_covered = stations[key];
            // get the intersection between currrent station covered and need covered
            let covered = covered_need.filter(c => s_covered.some(s => s === c));

            if (covered.length > state_covered.length){
                best_station = key;
                state_covered = covered;
            }
        }

        // get the minus between currrent station covered and need covered
        covered_need = covered_need.filter(c => !state_covered.some(s => s === c));
        // here get the most valuable station in this round

        if (best_station !== "" && !final_stations.some(fs => fs === best_station)){
            final_stations.push(best_station);
        }

        i++;
    }

    console.log("Here is the best answer to resolve the radio cover problem:");
    console.log(final_stations);
};

const traveller_problem = () => {
    let citys = ['A', 'B', 'C', 'D', 'E'];
    
    let lens = citys.length;

    let resolves: IHash<string> = {};

    while(lens > 0){

        let start_city = citys[lens - 1];
        let copy_citys = citys.slice().filter(c => c !== start_city);
        let travel_citys : Array<string> = [];
        travel_citys.push(start_city);
        let total_distance = 0;

        while (copy_citys.length > 0){
            let short_distance = Infinity;
            let next_city = start_city;

            for(let i in copy_citys){
                let city = copy_citys[i];

                let city_distance = get_city_distance(next_city, city);

                if (city_distance < short_distance){
                    short_distance = city_distance;
                    next_city = city;
                    total_distance += short_distance;
                }
            }

            copy_citys = copy_citys.filter(c => c !== next_city);
            travel_citys.push(next_city);
        }

        resolves[total_distance] = travel_citys.join('->');

        lens--;
    };

    let keys = Object.keys(resolves).sort();

    console.log("Here is the best resolve form every city:");

    keys.forEach(k => {
        console.log(resolves[parseInt(k)], k);
    })
};

const get_city_distance = (city1: string, city2: string) : number => {
    let distances : IMap<number> = {};
    distances["A->B"] = 10;
    distances["A->C"] = 20;
    distances["A->D"] = 42;
    distances["A->E"] = 51; 
    distances["B->C"] = 14; 
    distances["B->D"] = 31; 
    distances["B->E"] = 36; 
    distances["C->D"] = 31; 
    distances["C->E"] = 40; 
    distances["D->E"] = 16; 

    let key = `${city1}->${city2}`;
    let key2 = `${city2}->${city1}`;

    return distances[key] !== undefined ? distances[key] : distances[key2];
}

export {
    radio_cover_problem,
    traveller_problem
}