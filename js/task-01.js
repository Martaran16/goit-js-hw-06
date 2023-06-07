const elements = document.querySelector('ul');
console.log(elements);

const items = document.querySelectorAll('.item');
  console.log(`Number of categories: ${items.length}` );

const elementsCategory = document.querySelectorAll('.item').forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent} \nElements: ${el.lastElementChild.children.length}`)
}
);
    