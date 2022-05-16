const categories = document.querySelector("#categories");

const categsAmount = categories.children.length;

const categItemsEl = [...categories.children];

function checkCategAndElements() {
    console.log(`Number of categories: ${categsAmount}`);

    categItemsEl.forEach(category => {
        const categsTitle = category.firstElementChild.textContent;
    const categsAmountEl = category.lastElementChild.children.length;
        console.log(`Category: ${categsTitle}
Elements: ${categsAmountEl}`)
    });
    
}

checkCategAndElements()
