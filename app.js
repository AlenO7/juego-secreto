let listaNumerosSorteados = [];
let cantidadIntentos = 1;
let numeroMaximo = 10;

let numeroSecreto =  generarNumeroSecreto();


asignarTextoElemento('h1','Juego del número secreto' );
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} `);



//console.log(numeroSecreto);
// funcion reutilizable n veces
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')

    } else{

    

        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){ // .includes verifica si el numero generado esta dentro de la lista
            return generarNumeroSecreto(); //aplicamos recursividad llamandose asi misma la función

        }   else {
                listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    //  return numeroSecreto;
}

function verificarIntento(params) {
    let numeroDeUsuario = parseInt(document.getElementById('intento').value);
    //console.log(typeof(numeroDeUsuario));  controlo porconsola el tipo de dato
    console.log(cantidadIntentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Felicitaciones! Acertaste en ${cantidadIntentos} ${(cantidadIntentos === 1) ? 'vez' : 'veces' }  `);
        document.getElementById('reiniciar').removeAttribute('disabled'); //activa el boton de nuevo juego
    } else{
        // el usuario no acerto
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        cantidadIntentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#intento').value= '';
    
    return;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    //condiciones de inicio del juego
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 

    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto' );
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} `);
     //generar numero aleatorio
     numeroSecreto = generarNumeroSecreto();
     //inicializr el número de intentos
     cantidadIntentos= 1;

}


  



