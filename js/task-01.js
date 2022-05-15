const categories = document.querySelector("#categories");

const categsAmount = categories.children.length;

console.log(`Number of categories: ${categsAmount}`);

const categItemsEl = [...categories.children];



function checkCategAndElements() {
    
    categItemsEl.forEach(category => {
        const categsTitle = category.firstElementChild.textContent;
    const categsAmountEl = category.lastElementChild.children.length;
        console.log(`Category: ${categsTitle}
Elements: ${categsAmountEl}`)
    });
}

checkCategAndElements()
