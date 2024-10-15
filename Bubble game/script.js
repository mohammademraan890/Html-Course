
//Make bubbles function
function makeBubble(){
var clutter="";  //Must initialize it otherwise an undefine occur on the first iteration
for(let i=1;i<=184;i++){
   let rand= Math.floor((Math.random())*9)+1
    clutter+=` <div class="bubble">${rand}</div>`

}
document.querySelector("#pbottom").innerHTML=clutter
}
makeBubble();


//make timer 
let timer=10;
function timerrun(){
var bubbletimer=   setInterval(function(){
    if(timer>0){
        timer--;
        document.getElementById("timerval").innerText=timer;
        // console.log(timer)
    }
    else{
        clearInterval(bubbletimer);
        document.querySelector("#pbottom").innerHTML=`<h1>GAME OVER</h1>`

    }
        
},1000)
}
timerrun();


//Make hit function
let hitnum=0
function hitval(){
 hitnum=Math.floor(Math.random()*9)+1
document.getElementById("hitval").innerText=hitnum;
}
hitval();


//make score function
var score=0;
function scoreval(){
score+=10;
document.querySelector("#scoreval").innerText=score;
}

//make score reduce

function reducescoreval(){
score-=10;
document.querySelector("#scoreval").innerText=score;
}




// target the bubble
document.querySelector("#pbottom").addEventListener("click",function(details){
var clickednum=(Number(details.target.innerText))  //we use .target property to extract the element which we click 
//this will give us a string so we convert it in number by Number keyword
if(clickednum===hitnum){
    scoreval();
    makeBubble();
    hitval();
}
else{
    reducescoreval();
    makeBubble();
    hitval();
}
})

