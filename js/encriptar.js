const mensajeEntrada = document.querySelector(".input-texto");
const botonEncriptar = document.querySelector(".boton-encriptar");
document.getElementById("boton-copiar").style.display = "none";

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    if(mensajeEntrada.value.length === 0 || mensajeEntrada.value.trim().length === 0){
        return;
    }else{
        const mensajeEncriptado = encriptar(mensajeEntrada.value);
        const salidaMSJ = document.querySelector(".salida-munheco");
        salidaMSJ.innerHTML = '<textarea type="text" class="output-texto" cols="18" rows="8" id="output-texto"></textarea>';
        const mensajeSalida = document.querySelector(".output-texto");
        mensajeSalida.value = mensajeEncriptado;
        document.getElementById("boton-copiar").style.display = "inline";
        mensajeEntrada.value = "";
    }
});

function encriptar(mensaje){
    let reglas = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<reglas.length; i++){
        if(mensaje.includes(reglas[i][0])){
            mensaje = mensaje.replaceAll(reglas[i][0],reglas[i][1]);
        }
    }
    return mensaje;
}
