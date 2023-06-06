
let counterValue = 0;
const newItems = document.querySelector("#value");

const btnDec = document.querySelector('button[data-action = "decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

btnDec.addEventListener('click', () => {
    counterValue -= 1;
    newItems.textContent = counterValue;
 });
btnInc.addEventListener("click", () => { 
    counterValue += 1;
    newItems.textContent = counterValue;
});