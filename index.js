
var a = document.querySelectorAll(".drum");

for(var i = 0;i<a.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var value = this.innerHTML;
        makeSound(value);
        buttonAnimation(value);
       
    });  
}

document.addEventListener("keydown",function(event){
    // console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(value){
    switch (value) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(value);
            break;
    }
}

function buttonAnimation(value){
    var activebtn = document.querySelector("."+value);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}
