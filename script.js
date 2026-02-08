const categoryButtons = document.querySelectorAll('.filters button[data-filter]');
const sizeButtons = document.querySelectorAll('.filters button[data-size]');
const colorButtons = document.querySelectorAll('.filters button[data-color]');
const cards = document.querySelectorAll('.card');

let currentFilter = 'all';
let currentSize = 'all';
let currentColor = 'all';

// Filtr kategorii
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.getAttribute('data-filter');
    filterCards();
  });
});

// Filtr rozmiaru
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    sizeButtons.forEach(b => b.classList.remove('active-size'));
    button.classList.add('active-size');
    currentSize = button.getAttribute('data-size');
    filterCards();
  });
});

// Filtr koloru
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    colorButtons.forEach(b => b.classList.remove('active-color'));
    button.classList.add('active-color');
    currentColor = button.getAttribute('data-color');
    filterCards();
  });
});

// Funkcja filtrowania
function filterCards() {
  cards.forEach(card => {
    const matchesCategory = currentFilter === 'all' || card.classList.contains(currentFilter);
    const matchesSize = currentSize === 'all' || card.getAttribute('data-size') === currentSize;
    const matchesColor = currentColor === 'all' || card.getAttribute('data-color') === currentColor;
    card.style.display = matchesCategory && matchesSize && matchesColor ? 'block' : 'none';
  });
}
