const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
let roll=document.getElementById("roll");
let p=document.getElementById("myh3");
roll.onclick=function(){
    p.textContent=diceFaces[Math.floor(Math.random()*6)+1];
}
