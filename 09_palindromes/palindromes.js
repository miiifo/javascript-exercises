const palindromes = function (str) {
    str=str.toLowerCase().replace(/[^0-9a-z]/g, '');
    let reversedstr=str.split("").reverse().join("");
    return str==reversedstr;
};

// Do not edit below this line
module.exports = palindromes;
