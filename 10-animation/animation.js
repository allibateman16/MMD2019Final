const buttons = document.querySelectorAll("button");

const round = document.querySelectorAll(".round")
console.log(round)

const the_sound = document.querySelector("#theSound");
const play1 = document.querySelector("#playBtn1");
//const bounce_button = document.querySelector("#theSound");

const theSound = document.getElementById("theSound")
const stop1 = document.querySelector("#stopBtn1");



const character = document.querySelector("#charlie");
const button_flash = document.querySelector("#flash");
const button_rightslide = document.querySelector("#rightslide");
const button_spin = document.querySelector("#spin");
const button_scale = document.querySelector("#scale");
const button_bounce = document.querySelector ("#bounce");
const button_jump = document.querySelector("#jump");
const button_tipover = document.querySelector("#tipover");
const button_shake = document.querySelector("#shake");
const button_changeback = document.querySelector("#changeback");
const button_bye = document.querySelector("#bye");



//buttons
button_bounce.addEventListener("click", bounce);
button_scale.addEventListener("click", scale);
button_spin.addEventListener("click", spin);
button_rightslide.addEventListener("click", rightslide);
button_flash.addEventListener("click", flash);
button_jump.addEventListener("click", jump);
button_tipover.addEventListener("click", tipover);
button_shake.addEventListener("click", shake);
button_changeback.addEventListener("click", changeback);
button_bye.addEventListener("click", bye);

play1.addEventListener("click", playOneSound);
stop1.addEventListener("click", playOneSound);


round.forEach(drawThis)


function playOneSound() {
    console.log(this.id);
    if (this.id=="playBtn1") {the_sound.play();
    } else if(this.id=="stopBtn1") {
        the_sound.pause();
        the_sound.currentTime=0;
    }
}

function pauseSound() {
    console.log("Stopping sound");
    the_sound3.pause();
}

//function playOneSound(){
//    console.log(this.id);
//bounce_button.play();}



function drawThis(line) {
    line.classList.add("draw")
}

function drawThis(line, i) {
    setTimeout(function(){
       line.classList.add("draw")
    }, i * 1000)

}


function jump(){
   if (character.classList[0] == "jump"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("jump");
}
    }

function bounce() {
      if (character.classList[0] == "bounce"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("bounce");
}
    }

function scale() {
      if (character.classList[0] == "scale"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("scale");
}
    }

function spin () {
      if (character.classList[0] == "spin"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("spin");
}
    }

function rightslide(){
      if (character.classList[0] == "rightslide"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("rightslide");
}
    }

function flash () {
if (character.classList[0] == "flash"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("flash");
}
    }

function tipover() {
      if (character.classList[0] == "tipover"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("tipover");
}
    }

function shake() {
      if (character.classList[0] == "shake"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("shake");
}
    }

function changeback(){
      if (character.classList[0] == "changeback"){
    character.classList = "";
} else {
    character.classList = "";
    character.classList.add("changeback");
}
    }

function bye(){
    if (character.classList[0] == "bye") {
        character.classList = "";
    } else {
        character.classList = "";
        character.classList.add("bye");
    }
    }



//to change the buttons
buttons.forEach(displayIt);

function displayIt(element) {
  console.log(element);
  element.classList.add("mark");
  element.addEventListener("click", markIt);
}

function markIt() {
    console.log(this);
    this.classList.toggle("mark");
}



var header = document.getElementById("container");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
