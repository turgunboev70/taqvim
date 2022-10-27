const btn  = document.querySelector(".start")
const text = document.querySelector(".heading")
const input = document.querySelector("input")

btn.addEventListener("click", e => {
    text.style.display = "block";

    setTimeout(() => {
        if (input.value !== text.innerHTML) {
            input.setAttribute("disabled", "true")
        }
    }, 5000);
})