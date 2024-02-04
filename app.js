//------------- DOM -----------
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 4;
//funcion para agarrar elemento html y asignarle texto
const asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
};

const verificarIntento = () => {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      ".texto__parrafo",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //si el usuario no acierta
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento(".texto__parrafo", "El número secreto es menor");
    } else {
      asignarTextoElemento(".texto__parrafo", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  if (intentos > maximosIntentos) {
    asignarTextoElemento(".texto__parrafo", "Llegaste al máximo de intentos");
    document.getElementById("reiniciar").removeAttribute("disabled", "true");
  }

  return;
};

//las funciones siemrpe afuera
const limpiarCaja = () => {
  document.getElementById("valorUsuario").value = "";
};

const generarNumeroSecreto = () => {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(listaNumerosSorteados);
  //ya sorteamos todos los numeros? si ya se sortearon, texto
  //sino vuelve a sortear
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(
      ".texto__parrafo",
      "Ya se sortearon todos los números posibles"
    );
  } else {
    //Si el num generado esta incluido en la lista una cosa, sino esta incluida otra
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
};

const condicionesIniciales = () => {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento(
    ".texto__parrafo",
    `Indica un número del 1 al ${numeroMaximo}`
  );
  //general el num aleatorio
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  //inicializar el num de intentos
  intentos = 1;
};

const reiniciarJuego = () => {
  //limpiar la caja
  limpiarCaja();
  //msj de inicio
  //general el num aleatorio
  //inicializar el num de intentos
  condicionesIniciales();
  //deshabilitar nuevamente el boton nuevo juego
  //SET ATRIBUTTE 2 PARAMETROS
  document.getElementById("reiniciar").setAttribute("disabled", "true");
};

condicionesIniciales();
