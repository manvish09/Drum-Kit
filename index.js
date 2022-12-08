var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var letter = this.innerHTML;    
    makeSound(letter);
    buttonAnimation(letter);
    
});
}
document.addEventListener("keypress",function(event){ //here the event passed as an argument reads what event is being performed
    makeSound(event.key);   //this line passes the key pressed as an argument to the makesound function
    buttonAnimation(event.key);
});

function makeSound(key){    //here the key being passed as argument is the key pressed on the keyboard that was earlier passed by event.key
    switch(key){    
        case 'w' :
            var tom1 = new Audio('sounds/tom-1.mp3'); //here, the object must be a capital letter 
            tom1.play();
        break;

        case 'a':
            var  tom2= new Audio('sounds/tom-2.mp3'); 
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3'); 
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3'); 
            tom4.play();
        break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3'); 
            snare.play();
        break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3'); 
            crash.play();
        break;

        case 'l':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}