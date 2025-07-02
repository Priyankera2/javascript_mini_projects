let dec=document.getElementById("decrease");
let inc=document.getElementById("increase");
let c=document.getElementById("myh4");
let count=Number(localStorage.getItem("count"))||0;
c.textContent=count;
inc.onclick=function(){
count+=1;
c.innerHTML=count;
localStorage.setItem("count",count);

}
dec.onclick=function(){
count-=1;
c.innerHTML=count;
localStorage.setItem("count",count);
//alert(`current counter is ${count}`);

}