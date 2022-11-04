const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(nums) {
  const total=nums.reduce((total,a)=>{
    return total+a;
  },0);
  return total;
};

const multiply = function(nums) {
  const total=nums.reduce((total,a)=>{
    return total*a;
  });
  return total;

};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  if(a===0){
     return 1;
  }else if(a>0){
    for(i=a-1; i>0; i--){
      a=a*i
    }
    return a;
  }
};

//if (num === 0)  return 1; 
//return num * factorial(num-1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
