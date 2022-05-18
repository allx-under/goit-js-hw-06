const magicLine = document.querySelector("#font-size-control");

const outText = document.querySelector("#text");

magicLine.addEventListener('input', (e) => outText.style.fontSize = `${e.currentTarget.value}px`);

