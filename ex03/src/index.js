// Create a myPetArray array here
var myPetArray = ["Dog", "Cat"]
// End a myPetArray array 

function myArrayFunction(myPets){
    var myNewPets = [...myPets];
     // only change code below this line
     myNewPets.push("Bird", "Fish");
     var firstPet = myNewPets;
     firstPet.shift();
     var lastPet = myNewPets;
     lastPet.pop();
     myNewPets.unshift("Lion");
     return myNewPets
    // Only change code above this line
}

console.log(myArrayFunction(myPetArray));
module.exports = myArrayFunction;