const removeFromArray = function(array, ...value) {
    let output=array.filter(element => !value.includes(element));
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
