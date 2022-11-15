const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const allEl = ingredients => {
  return ingredients.map(ingredient => {
    const el = document.createElement("li");
    el.textContent = ingredient;
    el.classList.add("item");

    return el;
  });
}; 

const elems = allEl(ingredients);
console.log(elems);


list.append(...elems);








