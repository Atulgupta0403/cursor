const cont = document.querySelector(".container");

const cursor = document.querySelector(".box");


// cursor.style.backgroundColor = "red"

cont.addEventListener("mousemove",(val)=>{
    cursor.style.left = val.x + "px"
    cursor.style.top = val.y + "px"
})



