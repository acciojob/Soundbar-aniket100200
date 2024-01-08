//your JS code here. If required.
let state=["./sounds/Clapping sound effect.mp3",
"./sounds/ghost sound - Horror sound effect - Horror sounds - Horror voice.mp3",
"./sounds/Crowd GaspShock - Sound Effect (HD).mp3",
"./sounds/onlymp3.to - TA DA Sound Effect Variations SFX -V2nN0nUDch0-192k-1704698594.mp3",
"./sounds/onlymp3.to - Trumpet Sound Victory-OZMXOfyndiw-192k-1704698639.mp3",
"./sounds/onlymp3.to - Wrong Buzzer Sound Effect-2naim9F4010-192k-1704698689.mp3"];

let audio=document.querySelector("audio");

const buttons=document.querySelectorAll(".btn");
let i=0;
buttons.forEach(btn=>{
   btn.addEventListener('click',e=>{
        audio.src=state[i++];
        audio.play();
        i=i%state.length;
   });
});

document.querySelector(".stop").addEventListener('click',()=>{
    audio.pause();
});
