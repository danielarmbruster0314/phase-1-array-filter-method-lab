// Code your solution here
function findMatching(array,string){
    let outcome = array.filter( array => array.toLowerCase() === string.toLowerCase());
    return outcome;
   
}


function fuzzyMatch(array,string){
    let outcome = array.filter( array => array.toLowerCase().indexOf(string.toLowerCase()) === 0);
    return outcome;
}

function matchName(array,string){
    let outcome = array.filter( array => array.name === string);
    return outcome
}