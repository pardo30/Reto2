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

//TOY POSITION
function toyPosition(){
    if(net == "sq1"){
      document.getElementById("img-sq1").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(net == "sq2"){
      document.getElementById("img-sq2").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(net == "sq3"){
      document.getElementById("img-sq3").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(net == "sq4"){
      document.getElementById("img-sq4").style.display = 'block';
      document.getElementById("img-sq5").style.display = 'none';  
    }else if(net == "sq6"){
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

function drop(event) {
  console.log("drop")
  event.preventDefault();
  event.target.appendChild(document.getElementById("sphere"));
  event.dataTransfer.clearData();
  let boxId = event.target.getAttribute("id");
  if (boxId == net) {
    const result = document.getElementById("result").innerHTML = "SAFE!";
  } else {
    const result = document.getElementById("result").innerHTML = "GOAL!";
  }
  toyPosition();
}

function restart(){
  location.reload();
}
  



