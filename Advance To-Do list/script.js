let inputbox=document.querySelector("#todo-input")
let addbtn=document.querySelector("#todo-btn")
let todolist=document.querySelector(".todo-list")
addbtn.addEventListener("click",addtodo);
let Edittodo=null;
function addtodo(){
    let inputText=inputbox.value.trim();
    if(inputText.length==0){
        alert("Please add something in ToDo.")
        return false;
    }
    //Edittodo
    if(addbtn.value=="Edit"){
        Edittodo.target.previousElementSibling.innerHTML=inputText;
        addbtn.value="Add";
        inputText.value=""
    } 
    //creating li
    const li=document.createElement("li");
    const p=document.createElement("p");
    p.innerText=inputText;
    li.appendChild(p);

    
    //creating Edit Button
    let editbtn=document.createElement("button")
    editbtn.innerHTML="Edit"
    editbtn.classList.add("btn","editBtn")
    li.appendChild(editbtn)
    
    //creating delete Button
    let deletebtn=document.createElement("button")
    deletebtn.innerHTML="Remove"
    deletebtn.classList.add("btn","deleteBtn")
    li.appendChild(deletebtn)
    
    // deletebtn.addEventListener("click",()=>{
    //     li.remove();
    // })

    //append li in todo 
    todolist.appendChild(li);
    inputbox.value="";
}
//Delete or Edit Todo. 
function updatetodo(e){
// console.log(e.target.innerHTML)
if(e.target.innerHTML=="Remove"){
   (e.target.parentElement).remove();
}
if(e.target.innerHTML=="Edit"){
    inputbox.value=e.target.previousElementSibling.innerHTML;
inputbox.focus();   
addbtn.value="Edit";
    Edittodo=e;
    // console.log(e);
}

}

    
todolist.addEventListener("click",updatetodo);

