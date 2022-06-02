const palabraA = "ai";
const palabraE = "enter";
const palabraI = "imes";
const palabraO = "ober";
const palabraU = "ufat";

const button_one = document.querySelector(".button_one");
const button_two = document.querySelector(".button_two");
const button_copy = document.querySelector("#button_copy");

const input_text = document.querySelector('#input_text');
const output_text = document.querySelector('#output_text');
const rectangle_munieco = document.querySelector("#rectangle_munieco")
var texto_original = "";
var copiado;

button_one.addEventListener("click", function (event) {
    event.preventDefault();

    if (input_text.value != "") texto_original = input_text.value;

    encriptar(texto_original);

    input_text.value = "";
    rectangle_munieco.classList.add("hide");
    button_copy.classList.remove("hide");
    output_text.classList.remove("hide");
});

button_two.addEventListener("click", function (event) {
    event.preventDefault();

    if (copiado) {
        output_text.textContent = texto_original;
        return;
    }

    if (input_text.value != "") texto_original = input_text.value;

    if (texto_original.length > 0) output_text.textContent = texto_original;

    input_text.value = "";
    rectangle_munieco.classList.add("hide");
    button_copy.classList.remove("hide");
    output_text.classList.remove("hide");
});

button_copy.addEventListener("click", function (event) {
    event.preventDefault();

    output_text.select();
    copiado = document.execCommand("copy");

    button_copy.value = "Copiado!";
    button_copy.style.color = "green";
    setTimeout(function () {
        button_copy.value = "Copiar";
        button_copy.style.color = "#0A3871";
    }, 3000);
});

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
