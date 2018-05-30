const myArray = ["Ollie", "randomUser", "Ahmed", "Jose", "Julius", "James", "Alex", "Edem", "Ethan", "Harry", "Michael", "Ralph", "Phoebe", "Hamza", "Sheila", "Matt", "Rafal"];

// Keep length of myArray constantly the original length
const arrLength = myArray.length;
let randomItems = [];
let result = [];
// Make copy of array so original is not mutated
let newArr = myArray.slice();

// Take random item from original array and push into last position of new array
for (let i = 0; i < arrLength; i++) {
    let randomItem = Math.floor(Math.random()*newArr.length);
    // (Splice creates a new array with deleted items from original array)
    let name = newArr.splice(randomItem, 1);
    randomItems.push(name);
}
// Returns arrays within an array
// console.log('Random items array: ',randomItems);

// Concatenates pairs of indexes except when 3 remain -> concatenates trio
for (let j = 0; j < randomItems.length;) {
    if(randomItems.length === 3){
        let triplet = randomItems[j].concat(randomItems[j+1]).concat(randomItems[j+2]);
        randomItems.splice(randomItems[j],3);
        result.push(triplet);
    } else {
        let pair = randomItems[j].concat(randomItems[j+1]);
        randomItems.splice(randomItems[j],2);
        result.push(pair);
    }
}

// For each array (within the array), print a group number
let groupName = 0;
for (let k = 0; k < result.length; k++) {
    console.log("Group " + ++groupName);
    console.log("-------------");
    for (let l = 0; l < result[k].length; l++) {
        console.log(result[k][l]);
    }
    console.log(" ");
}
// console.log(result);