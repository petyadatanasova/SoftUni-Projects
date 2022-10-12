function townsToJSON(input){
    let arr = input[0].split("|");

   let coordinates =[];
    for (let i = 1; i < input.length; i++) {
        let details = input[i].split("|");
        let townName = details[1].trim();
        let latitudedetails = Number(details[2].trim());
        let longitudeDetails = Number(details[3].trim());
        coordinates.push({
            "Town": townName,
            "Latitude":Number(latitudedetails.toFixed(2)),
            "Longitude":Number(longitudeDetails.toFixed(2))
        })
        
    }
    return JSON.stringify(coordinates);
}
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
console.log("----------");
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));