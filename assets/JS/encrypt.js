const button_one = document.querySelector(".button_one");

button_one.addEventListener("click", function (event) {
    event.preventDefault();

    if (input_text.value.length <= 0) return;

    rectangle_munieco.classList.add("hide");
    button_copy.classList.remove("hide");
    output_text.classList.remove("hide");

    encriptar(input_text.value);
    input_text.value = "";
});