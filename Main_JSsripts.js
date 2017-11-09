var choiceOne = "null";
var choiceTwo = "null";

function hideMe(id) {
    var e = document.getElementById(id);
    e.style.display = 'none';
    }
function selection(b) {
    if (document.getElementById(b).style.backgroundColor == "lightblue") {
        document.getElementById(b).style.backgroundColor = "orange";
        if (choiceOne != "null"){
                choiceOne = "null";
        } else {
            choiceTwo = "null";
        }
    } else {
        document.getElementById(b).style.backgroundColor = "lightblue";
        if (choiceOne = "null") {
            choiceOne = b;
        } else {
            choiceTwo = b;
            document.getElementById(choiceOne).style.background = "orange";
            document.getElementById(choiceTwo).style.background = "orange";
            dataSearch(choiceOne, choiceTwo);
            popup();
    }
}
}
function popup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}
function dataSearch(arg1, arg2) {
    var fullList = recipies[arg1][arg2];
    return fullList[key];
}
var lePicture;
var leLink;
var recipies = {
    "chocolate": {"iceCream": {"image": "/media/brownie-ice-cream-sandwich.png", "name": "Brownies and Ice Cream", "link": "http://www.bake-aholic.com/brownie-ice-cream-sandwiches/#.WgN6VbpFyP8"},
                  "peanutButter": {"image": somehting, "name": something, "link": something}, 
                  "cheese": {"image": somehting, "name": something, "link": something}, 
                  "fruit": {"image": somehting, "name": something, "link": something}, 
                  "candy": {"image": somehting, "name": something, "link": something}},
    "peanutButter": {"iceCream": {"image": somehting, "name": something, "link": something},
                    "chocolate": {"image": somehting, "name": something, "link": something},
                    "cheese": {"image": somehting, "name": something, "link": something},
                    "fruit": {"image": somehting, "name": something, "link": something},
                    "candy": {"image": somehting, "name": something, "link": something}},
    "iceCream": {"chocolate": {"image": somehting, "name": something, "link": something}, 
              "peanutButter": {"image": somehting, "name": something, "link": something}, 
              "cheese": {"image": somehting, "name": something, "link": something}, 
              "fruit": {"image": somehting, "name": something, "link": something}, 
              "candy": {"image": somehting, "name": something, "link": something}},
    "cheese": {"chocolate": {"image": somehting, "name": something, "link": something}, 
              "peanutButter": {"image": somehting, "name": something, "link": something}, 
              "iceCream": {"image": somehting, "name": something, "link": something}, 
              "fruit": {"image": somehting, "name": something, "link": something}, 
              "candy": {"image": somehting, "name": something, "link": something}},
    "fruit": {"chocolate": {"image": somehting, "name": something, "link": something}, 
              "peanutButter": {"image": somehting, "name": something, "link": something}, 
              "cheese": {"image": somehting, "name": something, "link": something}, 
              "iceCream": {"image": somehting, "name": something, "link": something}, 
              "candy": {"image": somehting, "name": something, "link": something}},
    "candy": {"chocolate": {"image": somehting, "name": something, "link": something}, 
              "peanutButter": {"image": somehting, "name": something, "link": something}, 
              "cheese": {"image": somehting, "name": something, "link": something}, 
              "fruit": {"image": somehting, "name": something, "link": something}, 
              "iceCream": {"image": somehting, "name": something, "link": something}}
        }