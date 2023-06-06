
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = document.querySelector('#ingredients')

const newElements = ingredients.map((el) => {
  const li = document.createElement('li');

  li.classList.add('item');
  li.textContent = el;
  return li;
})
ingredientsItem.append(...newElements);
