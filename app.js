var btn = document.getElementById("han");
var flag = true;
var img = document.getElementById("bulb");
function show() {
    

    if (flag === true) {

        img.src = "./images/on3.jpg"
        btn.innerText = "OFF";
        flag = false;
    }
    else {

        img.src = "./images/off2.jpg"
        btn.innerText = "ON";
        flag = true;

    }

}
btn.addEventListener("click", show);