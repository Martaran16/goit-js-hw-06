
const focusInput = document.querySelector("#validation-input");

const textLength = document.querySelector("[data-length]");

focusInput.addEventListener("blur", (el) => {
    
    if (el.target.value.length === Number(textLength.dataset.length)) {
        focusInput.classList.add("valid")
        focusInput.classList.remove("invalid");
    }
    else {
        focusInput.classList.add("invalid");
        focusInput.classList.remove("valid");

    }
    console.log(textLength.dataset.length);
}

)