let sphere = document.getElementById("sphere");
let net = document.querySelectorAll('.netsq');


document.addEventListener("drag", function(event){
},false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
},false);

document.addEventListener("dragend", function(event){
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.className == "netsq") {
        event.target.style.background = "pink";
    }
}, false);

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "netsq") {
        event.target.style.background = "";
    } 
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "netsq"){
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);}
    var boxId = event.target.getAttribute("id");
    return boxId;
    }, false);

    console.log(boxId)
//document.write(boxId);