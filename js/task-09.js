//Напиши скрипт, який змінює кольори фону
//елемента < body > через інлайн - стиль по кліку на 
//button.change - color 
//і виводить значення кольору в span.color.
//Для генерування випадкового кольору використовуй 
//функцію getRandomHexColor.


const bodyColour = document.querySelector('body');
const btnColour = document.querySelector('.change-color');
const spanColour = document.querySelector('.color');
btnColour.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyColour.style.backgroundColor = color;
  spanColour.textContent = color;
    
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

