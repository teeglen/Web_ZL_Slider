var up = document.getElementById ("jerry-up")
var down = document.getElementById("jerry-next")

var items = document.getElementsByClassName("jerry-item")

var index = 0;

function btndown(){
    index++;
    if (index == items.length) index=0;
    console.log(index);
}

function btnup(){
    index--;
    if (index ==-1) index = items.length -1;
    console.log(index);
}

down.onclick = btndown;         //點擊函式
up.onclick = btnup;             //點擊函式