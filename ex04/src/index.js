// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr){
    var newMonitorsList = [...arr];
    // Only change code below this line
 var monitorsList = [];

 for (i=0; i<newMonitorsList.length; i++){
    newMonitorsList[0].push(1);
    newMonitorsList[1].push(2);
    newMonitorsList[2].push(3);
 };



    // Only change code above this line 
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;