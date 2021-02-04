/*
Author: Thanh Tran
 */
//declare constants
let button = document.getElementById("button");
let result = document.getElementById("result");

button.onclick = display;

//create a function to find name
function display() {
    let input = document.getElementById("myInput").value;
    //lop over all index of names
    for (let i = 0; i < names.length; i++) {

        if (input.toLowerCase() == (names[i]["name"]["first"]).toLowerCase()) {
        result.innerHTML += "Name " + names[i]["name"]["first"] + " " + names[i]["name"]["last"] + "<br>" +
                            "Sex: " + names[i]["Sex"] + "<br>" +
                            "Born: "+ names[i]["Born"] + "<br>"+
                            "Died: "+ names[i]["Died"] + "<br>"+
                            "Father: "+ names[i]["Father"]["first"] + " "+ names[i]["Father"]["last"] + "<br>"+
                            "Mother: "+ names[i]["Mother"]["first"] + " "+ names[i]["Mother"]["last"] + "<br>" + "<br>";
        }

    else {
       //result.innerHTML = "No person found";
    }

    }
}

