
var noofdrums = document.querySelectorAll(".drum").length;
// alert(noofdrums);
for (var i = 0; i < noofdrums; i++){
    document.addEventListener("keypress",function(event){
        handleClick(event);
    });
    // document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
// document.querySelector("button").addEventListener("click",handleClick);
function handleClick(event){
    var innerHtml = event.key;
    // alert(innerHtml);
    switch(innerHtml){
        case 'w': 
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();    
            break;
        case 'k':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

    }
}