function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    const numero1 = +document.getElementById("campo1").value;
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 + numero2);
}

function resta(){
    const numero1 = +document.getElementById("campo1").value;
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 - numero2);
}

function multiplicacion(){
    const numero1 = +document.getElementById("campo1").value;
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 * numero2);
}

function divicion(){
    const numero1 = +document.getElementById("campo1").value;
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 / numero2);
}

function raizCuadrada(){
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero2));
}

function potenciador(){
    const numero1 = +document.getElementById("campo1").value;
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function valorAbsoluto(){
    const numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero2));
}

function numeroRandom(){
    const min = +document.getElementById("campo1").value;
    const max = +document.getElementById("campo2").value;
    mostrarResultado(Math.random() * (max - min) + min);
}

function valorRaund(){
    const resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function valorFloor(){
    const resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}

function valorCeil(){
    const resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}