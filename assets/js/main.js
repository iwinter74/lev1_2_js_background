let x
function changeColor() {
    console.log("test")
    x = document.getElementById("color").value
    document.getElementById("container").style.background = x
    console.log(x)
}