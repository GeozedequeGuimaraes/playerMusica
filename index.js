const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const barra = document.querySelector("progressBar");
const progressMais = document.querySelector(".progress_mais");
const progressMenos = document.querySelector(".progress_menos");



playPause.addEventListener("click", () => {

  if(audio.paused || audio.ended) {
     playPause.querySelector(".pause-btn").classList.toggle("hide");
     playPause.querySelector(".play-btn").classList.toggle("hide");
     audio.play();
  }else {
     audio.pause();
     playPause.querySelector(".pause-btn").classList.toggle("hide");
     playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
   
audio.addEventListener("timeupdate", () => {

   curtime = parseInt(audio.currentTime,10);
   document.getElementById("progressBar").max = audio.duration;
   document.getElementById("progressBar").value = curtime;   
   
});



progressMais.addEventListener("click", () => {

   audio.currentTime += 10;
});
progressMenos.addEventListener("click", () => {

   audio.currentTime -= 10;
});
    
