const sumAll = function(num1, num2) {
    if ([num1, num2].every(element => Number.isInteger(element) && element >= 0)) {
        let output = 0
        let numStart = Math.min(num1, num2);
        let numEnd = Math.max(num1, num2);
        for (let i=numStart; i<=numEnd; i++) {
            output+=i;
        }
        return output
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
