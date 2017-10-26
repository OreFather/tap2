var choiceOne = "null";
var choiceTwo = "null";
var pbCups = 

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
        popup();
    }
        
}
function popup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}
function dataSearch(arg1, arg2) {
    var fullList = recipies[arg1][arg2];
    return fullList;
}
var recipies = {
    "chocolate": {"iceCream": [{}, {}, {}], 
                  "peanutButter": [{}, {}, {}], 
                  "cheese": [{}, {}, {}], 
                  "fruit": [{}, {}, {}], 
                  "candy": [{}, {}, {}]}
    "peanutButter": {"iceCream": [{}, {}, {}], "chocolate": [{}, {}, {}], "cheese": [{}, {}, {}], "fruit": [{}, {}, {}], "candy": [{}, {}, {}]}
        }