const bodyColour = document.querySelector('body');
const btnColour = document.querySelector('.change-color');
const spanColour = document.querySelector('.color');
btnColour.addEventListener('click', () => {
  bodyColour.style.backgroundColor = getRandomHexColor();
  spanColour.textContent = getRandomHexColor();
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

