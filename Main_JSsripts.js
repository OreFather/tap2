var choiceOne = "null";
var choiceTwo = "null";

function selection(b) {
    if (document.getElementById(b).style.backgroundColor == "blue") {
        document.getElementById(b).style.backgroundColor = "orange";
        
    } else {
        document.getElementById(b).style.backgroundColor = "blue";
    }
    if (choiceOne = "null") {
        choiceOne = b;
    } else {
        choiceTwo = b;
        dataSearch(choiceOne, choiceTwo);
        document.getElementById(choiceOne).style.background = "orange";
        document.getElementById(choiceTwo).style.background = "orange";
    }
        
}
function dataSearch(arg1, arg2) {
    var fullList = recipies[arg1][arg2];
    return fullList;
}
var recipies = {
    "chocolate": {"iceCream": [{}, {}, {}], "peanutButter": [{}, {}, {}]}
        
        }