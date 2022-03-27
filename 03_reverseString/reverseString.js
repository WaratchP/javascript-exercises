const reverseString = function(string) {
    let stringIndex=string.length-1;
    let output='';
    while(stringIndex >= 0) {
        output+=string[stringIndex]
        stringIndex--;
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
