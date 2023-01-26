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

const text = document.querySelector(".typing-text");
const textArray = text.textContent.split("");
text.innerHTML = "";
textArray.forEach((letter, i) => {
  setTimeout(() => {
    text.innerHTML += letter;
  }, 75 * i);
});
