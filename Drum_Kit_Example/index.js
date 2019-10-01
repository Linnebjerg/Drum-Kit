//document.getElementsByClassName ("drum")[0].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[1].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[2].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[3].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[4].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[5].addEventListener("click",handleClick);
//document.getElementsByClassName ("drum")[6].addEventListener("click",handleClick);


// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
// alert("I got clicked!");
// }

      //              ----------------------------------          //


// Adding 'EventListeners' of 'click' to every drum button.
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//          for (var i = 0; i < numberOfDrumButtons; i++) {

//        document.querySelectorAll(".drum")[i].addEventListener("click", function () {




              //              ---------------- Adding only 'EventListeners' of 'click' to every drum button ------------------          //
//        var buttonInnerHTML = this.innerHTML;
//          switch (buttonInnerHTML) {
//                case "w":
//                  var tom1 = new Audio("sounds/tom-1.mp3");
//                  tom1.play();
//                break;

//                case "a":
//                  var tom2 = new Audio("sounds/tom-2.mp3");
//                  tom2.play();
//                break;

//                case "s":
//                  var tom3 = new Audio("sounds/tom-3.mp3");
//                  tom3.play();
//                break;

//                case "d":
//                  var tom4 = new Audio("sounds/tom-4.mp3");
//                  tom4.play();
//                break;

//                case "j":
//                  var snare = new Audio("sounds/snare.mp3");
//                  snare.play();
//                break;

//                case "k":
//                  var crash = new Audio("sounds/crash.mp3");
//                  crash.play();
//                break;

//                case "l":
//                  var kickBass = new Audio("sounds/kick-bass.mp3");
//                  kickBass.play();
//                break;

//            default: console.log(buttonInnerHTML);
//              }
//            } );
//          }



              //              ---------------- Adding 'EventListeners' of both 'click' and 'keydown' to every drum button ------------------          //
              //              ---------------- This essentially allows sounds to be played by pressing the buttons or pressing the keys.  ------------------          //

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound (key) {

  switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

        case "l":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
        break;

    default: console.log(buttonInnerHTML);
      }
    }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

setTimeout (function() {
  activeButton.classList.remove("pressed");
  }, 100);

  }

});

  }
