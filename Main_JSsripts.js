var buttonCount = 0;

function selection(b) {
    buttonCount = buttonCount + 1;
    if (document.getElementById(b).style.backgroundColor == "blue") {
        document.getElementById(b).style.backgroundColor = "orange";
    } else {
        document.getElementById(b).style.backgroundColor = "blue";
    }
    if (buttonCount == 2) {
        buttonCount = 0;
        dataSearch();
    }
        
}
function dataSearch() {
    if ()
}