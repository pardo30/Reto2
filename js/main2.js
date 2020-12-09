//DRAG AND DROP BALL

function dragstart(event){
    console.log("dragStart")
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragover(event) {
    console.log("dragOver")
    event.preventDefault();
  }
  
function drop(event) {
    console.log("drop")
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
    event.dataTransfer.clearData();
    let boxId = event.target.getAttribute("id");
    return boxId
  }

let shot = drop();
console.log (shot);


// KEEPER MOVEMENT

let keeper = document.getElementById("toy");

function randomMovement(){
  let mov = Math.random();
  return mov
}
let mov = randomMovement();
console.log(mov)

function netSelection(){
  if (mov <= (1/6)){
    let net = "sq1"
    return net
  } else if((mov > (1/6)) & (mov <= (2/6))){
    let net = "sq2"
    return net
  } else if((mov > (2/6)) & (mov <= (3/6))){
    let net = "sq3"
    return net
  } else if((mov > (3/6)) & (mov <= (4/6))){
    let net = "sq4"
    return net
  }else if((mov > (4/6)) & (mov <= (5/6))){
    let net = "sq5"
    return net
  } else {
    let net = "sq6"
    return net
  }
}
let net = netSelection();
console.log(net);
