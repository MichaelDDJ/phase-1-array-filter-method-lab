// Code your solution here
function findMatching (array, name) {
    let newArray = array.filter( function (match) {
            return name.toUpperCase() === match.toUpperCase();
    });
    return newArray;
}

function fuzzyMatch (array, char) {
    let num = char.length;
    let newArray = array.filter(function (name) {
        if (name.slice(0,num) === char) {
            return name;
       }
    })
    return newArray;
}

function matchName (array, name) {
    let newArray = array.filter(function (driver) {
            return name === driver.name;
    })
    return newArray;
}

q = ['ab', 'bb', 'ab', 'bb', 'cb'];
console.log(findMatching(q, 'bB'));
