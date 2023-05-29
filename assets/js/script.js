const mensaje = document.getElementById("mensaje");
const elements = document.querySelectorAll(".elemento");

let btn_copiar = document.querySelector(".btn_copiar");
let textEncriptado = document.querySelector(".text_encriptado");
let alerta = document.querySelector(".alerta");

// ocultamos los elementos de la section 2
const ocultarElementos = () => {
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  btn_copiar.classList.remove("ocultar");
  textEncriptado.classList.remove("ocultar");
};



//Validar que el Campo textArea no este vacio y mostar las recpectivas alertas
function validarTextarea() {
  var textarea = document.getElementById('encriptar');
  var valorTextarea = textarea.value.trim();
  var expresionRegular = /^[a-z\s]+$/;// Experesion regular que solo acenta minusculas y  sin acentos 
  var texto = document.getElementById('alertaTextarea');

  if (valorTextarea === '') {
    texto.innerHTML = '<i class="fas fa-exclamation-circle"></i> El campo está vacío.';// Agregar el texto del error
    texto.style.color = 'red';//Agregar el color rojo*/
    return null;
  } else if (!expresionRegular.test(valorTextarea)) {// Validar que el textarea no contenga mayusculas y acentos
    textarea.value = ''; // Limpia el contenido del textarea
    texto.innerHTML = '<i class="fas fa-exclamation-circle"></i> Solo letras minúsculas y sin acentos.';// Agregar el texto del error
    texto.style.color = 'red';//Agregar el color rojo*/
    return null;
  } else {
    textarea.value = ''; // Limpia el contenido del textarea
    texto.innerHTML = '<i class="fas fa-exclamation-circle"></i> Solo letras minúsculas y sin acentos.'; // Restaurar el texto por defecto
    texto.style.color = ' #495057'; // Remover el color rojo
    return valorTextarea;
  }
}

// Boton para encripar
function btnEncriptar(){
  var textArea = validarTextarea();
  if (textArea !== null){
    const textoEncriptado = encriptar(textArea)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    ocultarElementos();
  }
  

}
// Boton para desepcritar
function btnDesepcriptar(){
  var textArea = validarTextarea();
  if(textArea !== null){
    const textoEncriptado = desencriptar(textArea)
    mensaje.value = textoEncriptado;
    textArea.value = "";
  }
}


function btnCopiar(){
  // Accedemos a los valores del textAre con id mensaje
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(mensaje.value);

  //agregamos y quitamos la alerta
  alerta.classList.remove("ocultar");
  setTimeout(() => {
  alerta.classList.add("ocultar");
  }, 1000);

}


// Funcion para encriptar
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"] ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i= 0; i< matrizCodigo.length; i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }
    }

    return stringEncriptada;
}
// funcion para desepcriptar
function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"] ]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for( let i= 0; i< matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  
  return stringDesencriptada;
}



// Obtener el botón de cambio de modo
const toggleButton = document.getElementById('toggle-mode');

// Agregar un listener al botón de cambio de modo
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('day-mode');
  document.body.classList.toggle('night-mode');
  document.querySelector('header').classList.toggle('day-mode');
  document.querySelector('header').classList.toggle('night-mode');
  document.querySelector('.section-encriptar').classList.toggle('day-mode');
  document.querySelector('.section-encriptar').classList.toggle('night-mode');
  document.querySelector('.section-desepcritar').classList.toggle('day-mode');
  document.querySelector('.section-desepcritar').classList.toggle('night-mode');
  document.querySelector('footer').classList.toggle('day-mode');
  document.querySelector('footer').classList.toggle('night-mode');

});
