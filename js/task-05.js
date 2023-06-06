
const inputName = document.querySelector("#name-input");
const nameAnonymous = document.querySelector("#name-output");

inputName.addEventListener("input", (evt) => nameAnonymous.textContent = evt.currentTarget.value ?
    evt.currentTarget.value : "Anonymous"); 
