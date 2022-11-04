const repeatString = function(a,b) {
    if(b<0) return "ERROR"
    let result=""
    for(let i=0; i<b; i++){
        result=result+a
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
