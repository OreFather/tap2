var choiceOne = "null";
var choiceTwo = "null";

$(document).ready(function(){
    $(".popuptext").hide();
})

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
        if (choiceOne == "null") {
            choiceOne = b;
        } else {
            choiceTwo = b;
            document.getElementById(choiceOne).style.background = "orange";
            document.getElementById(choiceTwo).style.background = "orange";
            dataSearch(choiceOne, choiceTwo);
    }
}
}


function dataSearch(arg1, arg2) {
    if (arg1 == "coco" || arg2 == "coco") {
    $.getJSON("json/chocolate.json", function(json){
        if (arg1 == "fruit" || arg2 == "fruit") {
            $("#choice0Name").append(json.ChocolateFruit.name);
            $("#choice0Image").append("<img src=" + json.ChocolateFruit.imgPath + " >");
            $("#choice0Skill").append(json.ChocolateFruit.skill);
        } else if (arg1 == "cheese" || arg2 == "cheese") {
            
        } else if (arg1 == "candy" || arg2 == "candy") {
            
        } else if (arg1 == "pB" || arg2 == "pB") {
            
        } else if (arg1 == "iceCream" || arg2 == "iceCream") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2= " + arg2);
        }
        console.log("--Exited chococlate function--");
        $(".flex").hide();
        $(".popuptext").show();
        
        
    })
    } else if (arg1 == "cheese" || arg2 == "cheese") {
        if (arg1 == "coco" || arg2 == "coco") {
            
        } else if (arg1 == "fruit" || arg2 == "fruit") {
            
        } else if (arg1 == "candy" || arg2 == "candy") {
            
        } else if (arg1 == "pB" || arg2 == "pB") {
            
        } else if (arg1 == "iceCream" || arg2 == "iceCream") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
        }
        
    } else if (arg1 == "candy" || arg2 == "candy") {
        if (arg1 == "coco" || arg2 == "coco") {
            
        } else if (arg1 == "cheese" || arg2 == "cheese") {
            
        } else if (arg1 == "fruit" || arg2 == "fruit") {
            
        } else if (arg1 == "pB" || arg2 == "pB") {
            
        } else if (arg1 == "iceCream" || arg2 == "iceCream") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
        }
    } else if (arg1 == "pB" || arg2 == "pB") {
        if (arg1 == "coco" || arg2 == "coco") {
            
        } else if (arg1 == "cheese" || arg2 == "cheese") {
            
        } else if (arg1 == "fruit" || arg2 == "fruit") {
            
        } else if (arg1 == "candy" || arg2 == "candy") {
            
        } else if (arg1 == "iceCream" || arg2 == "iceCream") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
        }
    } else if (arg1 == "fruit" || arg2 == "fruit") {
        if (arg1 == "coco" || arg2 == "coco") {
            
        } else if (arg1 == "cheese" || arg2 == "cheese") {
            
        } else if (arg1 == "candy" || arg2 == "candy") {
            
        } else if (arg1 == "pB" || arg2 == "pB") {
            
        } else if (arg1 == "iceCream" || arg2 == "iceCream") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
        }
    } else if (arg1 == "iceCream" || arg2 == "iceCream") {
        if (arg1 == "coco" || arg2 == "coco") {
            
        } else if (arg1 == "cheese" || arg2 == "cheese") {
            
        } else if (arg1 == "fruit" || arg2 == "fruit") {
            
        } else if (arg1 == "candy" || arg2 == "candy") {
            
        } else if (arg1 == "pB" || arg2 == "pB") {
            
        }else {
            console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
        }
    } else {
        console.log("Somthing went wrong in dataSearch() - arg1= " + arg1 + " arg2 = " + arg2);
    }
}