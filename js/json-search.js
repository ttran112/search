/*
Author: Thanh Tran
 */
let button = document.getElementById("button");
let result = document.getElementById("results");
button.onclick = display;

//let index = 0;
function display()
{
    let input = document.getElementById("myInput").value;
    //let name = names[index];
    //let first = name["name"]["first"];
    //let last = name["name"]["last"];

    for (let i = 0; i < names.length; i++) {
        if (input = names["name"]["first"]) {
            result.innerHTML += names[i] + "<br>";
        }
        else {
            result.innerHTML = "No person found";
        }
    }

}