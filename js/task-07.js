const inputChage = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChage.addEventListener('input', event => {
    abracadabra.style.fontSize = `${event.target.value }px`;
});