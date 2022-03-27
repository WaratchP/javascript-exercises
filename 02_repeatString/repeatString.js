const repeatString = function(string, repeatNo) {
    if (repeatNo >= 0 && isString(string)) {
        let output = '';
        while (repeatNo > 0) {
            output += string;
            repeatNo--;
        }
        return output
    }
    else {
        return "ERROR"
    }
};

function isString (string) {
    let test = Object.prototype.toString.call(string) == '[object String]' ? true : false;
    return test;
}

// Do not edit below this line
module.exports = repeatString;
