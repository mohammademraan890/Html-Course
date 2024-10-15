
let input=document.querySelector("#input")
input.addEventListener("keydown" ,function(event){  //In an arrow function, the value of this keyword is always the global object, which is the window object in a browser or the global object in a Node.js environment.
if(event.key=="Enter"){
additem(this.value)
this.value=""
}

})
let additem=function(item){
let createli=document.createElement("li")
createli.innerHTML=`<span id="txt"> ${item}</span><span id="cross">&times;</span>`
createli.addEventListener("click",function(){
this.classList.toggle("cut")
})
createli.querySelector("#cross").addEventListener("click",function(){
createli.remove();
})
let newTodo =document.querySelector(".todo-box").appendChild(createli)
}
