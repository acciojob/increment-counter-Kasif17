//your JS code here. If required.
let count = 0;
let counterElemnet = document.getElementById("text");
function Updatecounter() {
	counterElemnet.textContent = count;
}
function Increment() {
	alert(count)
	count++;
	Updatecounter()
}
Increment()