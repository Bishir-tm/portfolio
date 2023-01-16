const myNameAudio = document.getElementById('myNameAudio')
const speaker= document.getElementById("speaker");

myNameAudio.controls = false
speaker.addEventListener("click",function() {
    if (myNameAudio.paused){
        myNameAudio.play();
        myNameAudio
    } else {
        myNameAudio.load();
    }
});

