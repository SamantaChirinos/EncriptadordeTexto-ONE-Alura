
mensajeEntrada.addEventListener("input", function(event){
    if(validar(mensajeEntrada.value)){
        mensajeEntrada.value = mensajeEntrada.value.substring(0, mensajeEntrada.value.length - 1);
        document.getElementById("reglas").style.color = "red";
    }else{
        document.getElementById("reglas").style.color = "#495057";
    }
});

function validar(mensaje){
    const charnopermitidos = /[^a-zñ\s\n\f]$/;
    return charnopermitidos.test(mensaje);
}