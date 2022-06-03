
const button_two = document.querySelector(".button_two");

button_two.addEventListener("click", function (event) {
    event.preventDefault();

    if (input_text.value.length <= 0) return;

    rectangle_munieco.classList.add("hide");
    button_copy.classList.remove("hide");
    output_text.classList.remove("hide");

    desencriptador(input_text.value);

    input_text.value = "";
});