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

// toggle X button on mobile nav
document.getElementById('navbarToggler').addEventListener('click',function(){
  console.log(this);
  if(this.classList.contains('collapsed')){
    this.innerHTML='&#9776;'
  } else {
    this.innerHTML = "&#10006;"
  }
})
console.log(Animation.prototype)

const text = document.querySelector(".typing-text");
const textArray = text.textContent.split("");
text.innerHTML = "";
textArray.forEach((letter, i) => {
  setTimeout(() => {
    text.innerHTML += letter;
  }, 50 * i);
});

