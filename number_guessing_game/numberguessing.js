//NUMBER GUESSING GAME
const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min;
console.log(ans);
let running=true;
let attempts=3;
let guess;
while(running){
guess=window.prompt(`Guess a number between ${min} and ${max}`);
guess=Number(guess);

if(isNaN(guess)){
    window.alert("Please enter a valid number");
    
}
else{
    if(guess==ans){
        window.alert("You guessed it right");
        running=false;break;
    }
    else if(guess<ans){
        window.alert("Too Low! Guess some higher number");
    }else if(guess>ans){
        window.alert("Too High! Guess some lower number");
    }
    

}
attempts--;
if(attempts==0&&running){
    window.alert("You have 0 chances left! Better Luck Next Time");
    running=false;
}
}