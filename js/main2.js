
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
    if(keeperMovement == "sq1"){
      document.getElementById("img-sq1").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(keeperMovement == "sq2"){
      document.getElementById("img-sq2").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(keeperMovement == "sq3"){
      document.getElementById("img-sq3").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(keeperMovement == "sq4"){
      document.getElementById("img-sq4").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(keeperMovement == "sq6"){
      document.getElementById("img-sq6").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else{
      document.getElementById("img-sq5").style.display = 'block'; 
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
  event.dataTransfer.clearData();
  var boxId = event.target.getAttribute("id");
  netSpace = boxId;
}

function compare(){
  let keeperMovement = netSelection();
  if (netSpace == keeperMovement) {
    const result = document.getElementById("result").innerHTML = "SAFE!";
  } else {
    const result = document.getElementById("result").innerHTML = "GOAL!";
  }
  document.getElementById("restartButton").style.display = 'block';
  keeperPosition(keeperMovement);
  console.log("keeperMovement " + keeperMovement);
  console.log("netSpace "+ netSpace);

}

function restart(){
  location.reload();
}
  



