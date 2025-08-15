//your JS code here. If required.
let count = 0;
let counterElement = document.getElementById("text");

function Updatecounter() {
    counterElement.textContent = count;
}

function Increment() {
    alert(count);
    count++;
    Updatecounter();
}