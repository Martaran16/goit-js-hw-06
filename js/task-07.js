
const valueInput = document.querySelector('#font-size-control');
const inputText = document.querySelector("#text");

valueInput.addEventListener("input", handleTextSize)
function handleTextSize () {
  inputText.style.fontSize = valueInput.value + 'px';  
}
console.log(handleTextSize);
