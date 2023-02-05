// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
// ]


function superbowlWin(record){

    //each object has 2 properties: year and result
    //use find() to test each object see if 'result' is "W"
    let winYear = record.find(obj => obj.result === "W")
    if (winYear == undefined) return undefined
    return winYear.year


    //return year when win occured, if it did
    //return undefined if no win occured
    

}