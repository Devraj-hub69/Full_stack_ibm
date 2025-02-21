document.getElementById("p1").style.backgroundColor="lightgrey"
document.getElementById("p1").style.border="2px solid red"
document.getElementById("p1").style.height="300px"
document.getElementById("p1").style.width="80%"
let element=document.createElement("button")
element.innerText="submit"
element.style.backgroundColor="lightgreen"
element.style.padding="10px"
document.getElementById("p1").append(element)
let num=10;
console.log(num)
function myfunction(){
    console.log(num)
}
myfunction()