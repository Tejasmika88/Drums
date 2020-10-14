//click listeners
var btns=document.getElementsByClassName("drum");
for(var i=0;i<btns.length;i++)
{
  btns[i].addEventListener("click",function(event){
   makeSound(event.target.innerHTML);
   //makeSound(this.innerHTML);  
   btnAnimation(event.target.innerHTML);
  });
}

//keyboard listerner
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  btnAnimation(event.key);
});


// Play the sound
function makeSound(btn){
  console.log("Key press/click detected: "+btn);
  var playMusic="";

  switch(btn){
    case "w":
        playMusic="sounds/crash.mp3";
        break;
    case "a":
        playMusic="sounds/kick-bass.mp3";
        break;
    case "s":
        playMusic="sounds/snare.mp3";
        break;
    case "d":
        playMusic="sounds/tom-1.mp3";
        break;
    case "j":
        playMusic="sounds/tom-2.mp3";
        break;
    case "k":
        playMusic="sounds/tom-3.mp3";
        break;
    case "l":
        playMusic="sounds/tom-4.mp3";
        break;
    default :
         playMusic="sounds/tom-4.mp3";
         break;
    }
    var audio=new Audio(playMusic);
    audio.play();
}

//button animation
function btnAnimation(keyPressed)
{
  document.querySelector("."+keyPressed).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+keyPressed).classList.remove("pressed");
  },200);
}
