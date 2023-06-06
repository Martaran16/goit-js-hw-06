const elements = document.querySelector('ul');
console.log(elements);

const items = document.querySelectorAll('.item');
  console.log(`Number of categories: ${items.length}` );

const elementsCategory = document.querySelectorAll('.item').forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent} \nElements: ${el.querySelectorAll('li, ul').length - 1}`)
}
);
    