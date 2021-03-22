// Create a temps array here
   temps = [
    {"monday": [31, 32, 19, 37]},
    {"tuesday": [29, 27, 55, 36]},
    {"wednesday": [17, 27, 42, 46]},
    {"thursday": [29, 52, 21, 64]},
    {"friday" :[91, 27, 31, 61]}
 ]; 
// End of temps array
function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
    // only change code below this line
    newTemps=temps;

    var monday;
for (var i=0; i<newTemps[0].length; i++){
    for(var j=0; j<newTemps[i].length; j++){
    monday+=newTemps[i][j];
    } 
    break; 
};

var tuesday;
for (var i=0; i<newTemps[1].length; i++){

    tuesday+=newTemps[arr];
};
var wednesday;
for (var arr=0; arr<newTemps[2].length; arr++){
    wednesday+=newTemps[arr];
};
var thursday;
for (var arr=0; arr<newTemps[3].length; arr++){
    thursday+=newTemps[arr];
};
var friday;
for (var arr=0; arr<newTemps[4].length; arr++){
    friday+=newTemps[arr];
};
averageDayTemp.push(monday/4, tuesday/4, wednesday/4, thursday/4, friday/4 );

// Only change code above this line
return averageDayTemp; 
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;