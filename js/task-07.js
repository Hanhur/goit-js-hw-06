const inputChage = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChage.addEventListener('change', event => {
    abracadabra.style.fontSize = `${event.target.value }px`;
});