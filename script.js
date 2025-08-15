//your JS code here. If required.
let count = 0;
let counterElement = document.getElementById("counter");

function Updatecounter() {
    counterElement.textContent = count;
}

function incrementBtn() {
    alert(count);
    count++;
    Updatecounter();
}