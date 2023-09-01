const catergories = document.querySelectorAll('.categorie');
const productBuyItemButtons = document.querySelectorAll(
  '.product-gallery-item'
);
const btncng = document.querySelector('.action-signup');
const removeimg = document.querySelector('.remove-img');
let cardBadgeCount = 2;

catergories.forEach((item) => {
  item.querySelector('.categorie-name').addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      closeAllCategroies();
      item.classList.toggle('active');
    }
  });
});
productBuyItemButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cardBadgeCount++;
  });
});
function closeAllCategroies()

function closeAllCategroies() {
  catergories.forEach((item) => {
    item.classList.remove('active');
  });
}

btncng.addEventListener('click', function () {
  document.querySelector('.login-card').classList.remove('hidden');
});
removeimg.addEventListener('click', function () {
  document.querySelector('.login-card').classList.add('hidden');
});
