// contenedor de menu responsivo
const contenedor=document.getElementById("contenedorMenuResponsivo")
//
const btnResponsivo=document.getElementById("responsivo");
const btnCerrarResponsivo=document.getElementById("CerrarResponsivo")
// FUNCIONES
btnResponsivo.addEventListener("click",()=>{
    contenedor.style.display="block";
    btnResponsivo.style.display="none";
    btnCerrarResponsivo.style.display="block"
})
btnCerrarResponsivo.addEventListener("click",()=>{
    contenedor.style.display="none";
    btnResponsivo.style.display="block";
    btnCerrarResponsivo.style.display="none"
})