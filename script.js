const head = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = newColor;
    head.innerText = newColor;
});