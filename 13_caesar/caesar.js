const caesar = function(str,num) {
    let toArr=str.split("");
    let caesar=[];

    toArr.forEach(e=> {
        let getCharCode=e.charCodeAt();
        
        //works for negative num
        function mod(n) {
            return ((n % 26) + 26) % 26;
        }

        //Upper case 
        if(getCharCode>= 65 && getCharCode <= 90){
            getCharCode=mod(getCharCode+num-65)+65;
            
        }//Lower case
        else if(getCharCode >= 97 && getCharCode <= 122){
            getCharCode=mod(getCharCode+num-97)+97;
            
        }

        let letter=String.fromCharCode(getCharCode);
        caesar.push(letter);
    });
    return caesar.join("");

};

// Do not edit below this line
module.exports = caesar;
