var choiceOne = "null";
var choiceTwo = "null";

function selection(b) {
    if (document.getElementById(b).style.backgroundColor == "lightblue") {
        document.getElementById(b).style.backgroundColor = "orange";
    } else {
        document.getElementById(b).style.backgroundColor = "lightblue";
    }
    if (choiceOne = "null") {
        choiceOne = b;
    } else {
        choiceTwo = b;
        
    }

}
