const palabraA = "ai";
const palabraE = "enter";
const palabraI = "imes";
const palabraO = "ober";
const palabraU = "ufat";

const input_text = document.querySelector('#input_text');
const output_text = document.querySelector('#output_text');
const rectangle_munieco = document.querySelector("#rectangle_munieco");

function encriptar(texto) {
    var palabraEncriptada = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") palabraEncriptada += palabraA;
        else if (texto[i] == "e") palabraEncriptada += palabraE;
        else if (texto[i] == "i") palabraEncriptada += palabraI;
        else if (texto[i] == "o") palabraEncriptada += palabraO;
        else if (texto[i] == "u") palabraEncriptada += palabraU;
        else {
            palabraEncriptada += texto[i];
        }
    }

    output_text.textContent = palabraEncriptada;
}

function desencriptador(texto) {
    var dividida;

    dividida = texto.split(palabraA);
    texto = dividida.join("a");

    dividida = texto.split(palabraE);
    texto = dividida.join("e");

    dividida = texto.split(palabraI);
    texto = dividida.join("i");

    dividida = texto.split(palabraO);
    texto = dividida.join("o");

    dividida = texto.split(palabraU);
    texto = dividida.join("u");

    output_text.textContent = texto;
}

