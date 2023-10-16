let btn = document.getElementById("contenedor");

btn.addEventListener("click", (e) =>{

let click = e.target; 

let res = document.getElementById("resultado");
let valor = prompt("por favor ingrese su edad");
if (!isNaN(valor) && valor != null && valor != ""){
    
    if (valor>17){
    
        res.innerHTML="✓ - SI CALIFICAS! calificado para optar por tu licencia";
    
    }else{
    
        res.innerHTML="X - NO CALIFICAS! para tener licencia.";
    
    }

}else{
    res.innerHTML="-- Ingrese un valor --";
}

});