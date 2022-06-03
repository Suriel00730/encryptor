
const button_copy = document.querySelector("#button_copy");

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
