
        let randomcolor=()=>{
  let randomnum=  Math.floor(Math.random()*16777215)
    // console.log(randomnum)
    let randomcode="#"+randomnum.toString(16);
    // console.log(randomnum,randomcode)
    document.body.style.backgroundColor=randomcode
    document.getElementById("colorCode").innerText=randomcode
}
document.getElementById("btn").addEventListener("click",randomcolor)
randomcolor();
    