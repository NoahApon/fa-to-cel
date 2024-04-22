
//input-event listener
document.getElementById("conv-btn").addEventListener("click", convert);

function convert () {

    //processing- calculations
var Input = +document.getElementById("input").value;
var Celsius = (Input - 32) * 5 / 9;
var Celsius = Celsius.toFixed(1);



//output
console.log("test")
document.getElementById("Output").innerHTML = Celsius;
document.getElementById("input").style.backgroundColor = "#26d978";
document.getElementById("input").value = ""
}

