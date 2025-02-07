const btnF=document.getElementById("btnFront");
const btnB=document.getElementById("btnBack");
const btnBD=document.getElementById("btnBased")
const btnAll=document.getElementById("btnT")
// variables globales
const f=document.getElementById("fron")
const b=document.getElementById("back");
const bd=document.getElementById("bd");
const all=document.getElementById("todos")

// Funcion para mostrar el front 
btnF.addEventListener("click",function () {
    b.style.display="none";
    bd.style.display="none";
    f.style.display="flex"
})

// Funcion para mostrar el back
btnB.addEventListener("click",function () {
    f.style.display="none";
    bd.style.display="none";
    b.style.display="flex";
})
// FUncion para las bases de datos
btnBD.addEventListener("click",function () {
    f.style.display="none";
    bd.style.display="flex";
    b.style.display="none";
    all.style.display="none";
})

// Funcion para mostrar todo
btnAll.addEventListener("click",function () {
    f.style.display="flex";
    b.style.display="flex";
    bd.style.display="flex";
    all.style.display="flex";
})



const skills=[
    {id:1,tech:["js","a"]},
    {id:2,tech:["jsgsd","as"]},
    {id:3,tech:["jsfg","hola"]},
]


/* para hacer un modal */


// const clickMostar=document.getElementById(`mas-${index}`);
// const cajaDialog=document.getElementById("mostrar")

// clickMostar.addEventListener("click",()=> {
//     cajaDialog.showModal();
// })

