
var netSpace; //1 of 6 net Spaces
var keeperMovement; //Positions of keeper 

// KEEPER MOVEMENT

function netSelection(){
  function randomMovement(){
    let mov = Math.random();
    return mov
  }
  let mov = randomMovement();
  if (mov <= (1/6)){
    let keeperMovement = "sq1"
    return keeperMovement
  } else if((mov > (1/6)) & (mov <= (2/6))){
    let keeperMovement = "sq2"
    return keeperMovement
  } else if((mov > (2/6)) & (mov <= (3/6))){
    let keeperMovement = "sq3"
    return keeperMovement
  } else if((mov > (3/6)) & (mov <= (4/6))){
    let keeperMovement = "sq4"
    return keeperMovement
  }else if((mov > (4/6)) & (mov <= (5/6))){
    let keeperMovement = "sq5"
    return keeperMovement
  } else {
    let keeperMovement = "sq6"
    return keeperMovement
  }
}

//KEEPER POSITION
function keeperPosition(keeperMovement){
  let toy = document.getElementById("img-sq0");
  toy.setAttribute("id",`img-${keeperMovement}`);
  if(keeperMovement == "sq1"){
    toy.src = "./img/sq1.png"
  }
  if(keeperMovement == "sq2"){
    toy.src = "./img/sq2.png"
  }
  if(keeperMovement == "sq3"){
    toy.src = "./img/sq3.png"
  }
  if(keeperMovement == "sq4"){
    toy.src = "./img/sq4.png"
  }
  if(keeperMovement == "sq5"){
    toy.src = "./img/sq5.png"
  }
  if(keeperMovement == "sq6"){
    toy.src = "./img/sq6.png"
  }
}
//DRAG AND DROP BALL

function dragstart(event){
  console.log("dragStart")
  event.dataTransfer.setData("text/plain", event.target.id);
}
function dragover(event) {
  console.log("dragOver")
  event.preventDefault();
}

function dragenter(event) {
  event.preventDefault();
  if (event.target.className == "netsq") {
    event.target.style.border = "thick dotted #a30000";
  }
}

function dragleave(event) {
  event.preventDefault();
  if (event.target.className == "netsq") {
    event.target.style.border = "";
  } 
}


function drop(event) {
  console.log("drop")
  event.preventDefault();
  event.target.appendChild(document.getElementById("sphere"));
  // event.dataTransfer.clearData();
  var boxId = event.target.getAttribute("id");
  netSpace = boxId;
}

function compare(){
  let keeperMovement = netSelection();
  if (netSpace == keeperMovement) {
    let result = "SAFE! Perhaps there will be another occasion.";
    document.getElementById("result").innerHTML = result;
  } else {
    let result = "GOAL! Well done."
    document.getElementById("result").innerHTML = result;
    document.getElementById("net").style.backgroundImage = "url(./img/netGoal.jpg)";
  }
  document.getElementById("restartButton").style.display = 'block';
  keeperPosition(keeperMovement);
  console.log("keeperMovement " + keeperMovement);
  console.log("netSpace "+ netSpace);
}

function restart(){
  location.reload();
}
  



