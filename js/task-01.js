const items = document.querySelectorAll('.item');
console.log("Number of categories:", items.length);

items.forEach(foo);

function foo(elem) {
    const titleEl = elem.firstElementChild;
    console.log('Category:', titleEl.textContent);

    const numbersEl = titleEl.nextElementSibling;
    console.log('Elements:', numbersEl.children.length);
}