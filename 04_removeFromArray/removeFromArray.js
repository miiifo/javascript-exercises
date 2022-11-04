const removeFromArray = function(a,...args) {
   /* let newArray=[];
    a.forEach((item)=>{
        if (!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
    */
    // Bra Jobbat ♥
    let result=a.filter(function(item){
        return !args.includes(item);
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
