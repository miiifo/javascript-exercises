const findTheOldest = function(people) {
    people.forEach(e => {
        if(e.yearOfDeath===undefined){
            let today = new Date();
            let getCurrentYear=today.getFullYear();
            e.yearOfDeath=getCurrentYear;
        }
    });

    let sorted=people.sort((a,b)=>{
        const lastguy=a.yearOfDeath-a.yearOfBirth;
        const nextguy=b.yearOfDeath-b.yearOfBirth;
  
        return nextguy-lastguy;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
