//Escribe aquí tu código JavaScript
let nombre = document.getElementById(nombre);
let email = document.getElementById(email);
let direccion = document.getElementById(direccion);
let telefono = document.getElementById(telefono);
let raciones = document.getElementById(raciones);
let precioF = document.getElementById(precio);
function validar(){
    if(nombre.value = null || !email.value.includes("@") || direccion.value < 18 || telefono.value != 9 || isNaN(telefono.value)){
    return false;
}
    return true
};

function calcularPrecio(){
    let precioo = 0;
    let acompaña = 0;

    if(document.getElementById(adobo)){
        precioo = 7;
    }
    if(document.getElementById(calamares)){
        precioo = 6;
    }
    if(document.getElementById(boquerones)){
        precioo = 8;
    }

    if(document.patatas.checked){
        acompaña = acompaña + 4;
    }
    if(document.ensaladilla.checked){
        acompaña = acompaña + 4;
    }
    if(document.manzanilla.checked){
        acompaña = acompaña + 4;
    }

    let precioFinal = 0;

    precioFinal = precioo + acompaña + parseInt(raciones.value);
    precioF.textContent(precioFinal);
};

function contador(){
    document.getElementById("contador").textContent = this.value.length;
};

document.getElementById("modoOscuro").onclick = function(){
  document.body.classList.toggle("oscuro");
};

document.getElementById("modoClaro").onclick = function(){
    document.body.classList.toggle("claro");
};

