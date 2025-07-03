let roll=document.getElementById("roll");
let p=document.getElementById("myh3");
roll.onclick=function(){
    p.textContent=Math.floor(Math.random()*6)+1;
}
