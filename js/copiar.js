const botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.addEventListener("click", function(event){
  event.preventDefault();
  const mensajeSalida = document.querySelector(".output-texto");
  const textoACopiar = mensajeSalida.value;
  let seleccionarTexto = document.createElement("textarea");
  seleccionarTexto.textContent = textoACopiar;
  document.body.append(seleccionarTexto);
  seleccionarTexto.select();
  document.execCommand("copy");
  seleccionarTexto.remove();
  alert("Texto copiado");
});


