const ftoc = function(f) {
  toC=(f-32)*5/9;
  return Math.round(toC*10)/10;
};

const ctof = function(c) {
  toF=c*9/5+32;
  return Math.round(toF*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
