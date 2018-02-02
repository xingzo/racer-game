// window.onload = function(){
//
//   startGame();
//   var car1 = document.getElementById('car1');
//   var car2 = document.getElementById('car2');
//   //set the left to 0 first
//   document.getElementById("car1").style.left = 0 + "px";
//   document.getElementById("car2").style.left = 0 + "px";
//
//
// }
  var car1 = {
    name : "RED CHALLE",
    div : document.getElementById('car1'),
    position: 0

  }

  var car2 = {
    name : "BLUE CHALLE",
    div : document.getElementById('car2'),
    position: 0

  }
  // var car1 = document.getElementById('car1');
  // var car2 = document.getElementById('car2');
  //set the left to 0 first
  car1.div.style.left = 0 + "px";
  car2.div.style.left = 0 + "px";
  // car1.position = 0;
  // car2.position = 0;

function move (car)
{
  if(car.position > 700)
  {
    alert(`${car.name} WON`);
    return;

  }

  else{
    var currentRedCarPosition = parseInt(car.div.style.left, 10);
    console.log(currentRedCarPosition);
    var newRedCarPosition = currentRedCarPosition + 40;
     car.div.style.left = newRedCarPosition + "px";
     car.position = newRedCarPosition;


  }


}


document.body.addEventListener('keyup',function(event){

  if(event.key === 'ArrowRight'){
    console.log('CAR1');
    move(car1);
  } else if(event.key === "ArrowLeft"){
    console.log('CAR2');
    move(car2);
  }
});





// document.getElementById("car1").onclick = function()
// {
//   var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
//   console.log(currentRedCarPosition);
//   var newRedCarPosition = currentRedCarPosition + 200;
//    document.getElementById("car1").style.left = newRedCarPosition + "px";
// }
//
//
//
//
//
// document.getElementById("car1").onclick = function()
// {
//   console.log( I am )
//   var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
//   console.log(currentRedCarPosition);
//   var newRedCarPosition = currentRedCarPosition + 200;
//    document.getElementById("car1").style.left = newRedCarPosition + "px";
// }







// var myCar;
//
// function startGame() {
//   cars = {
//     redCar: {
//       div: document.getElementById("redCar"),
//     },
//     myGameArea.start();
// }


var car1;

// function moveright(){
//   car1 = document.getElementsByClassName("car1");
//   console.log("it works");
//
//   // car1.style.left += 10px;
//



// car1.onClick = function () {
// console.log("it works");
//
//
// }


// document.getElementById("myButton").onClick = function(){
//
// console.log("it works");
//
//
// }
