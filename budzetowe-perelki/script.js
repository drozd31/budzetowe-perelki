const categoryButtons = document.querySelectorAll('.filters button[data-filter]');
const sizeButtons = document.querySelectorAll('.filters button[data-size]');
const cards = document.querySelectorAll('.card');

let currentFilter = 'all';
let currentSize = 'all';

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

// Funkcja filtrowania
function filterCards() {
  cards.forEach(card => {
    const matchesCategory = currentFilter === 'all' || card.classList.contains(currentFilter);
    const matchesSize = currentSize === 'all' || card.getAttribute('data-size') === currentSize;
    card.style.display = matchesCategory && matchesSize ? 'block' : 'none';
  });
}
