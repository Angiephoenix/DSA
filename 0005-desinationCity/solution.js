/**
 * @param {string[][]} paths
 * @return {string}
 */
let destCity = function(paths) {
    const startingCities = new Set();
    const destinationCities = new Set();
    
    for (const [start, end] of paths) {
        startingCities.add(start);
        destinationCities.add(end);
    }
    
    for (const city of destinationCities) {
        if (!startingCities.has(city)) {
            return city;
        }
    }
    
    return ""; 
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]));
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
console.log(destCity([["A","Z"]]));
