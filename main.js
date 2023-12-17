import basketButton from './basketButton.js';
import { handleAmountClick } from './handleAmountClick.js';
import { countTotalPrice } from './countTotalPrice.js';
import { handleSelectChoice } from './handleSelectChoice.js';
import { renderBasket } from './renderBasket.js';

const menuItems = document.querySelectorAll('.menu__item');
const basketContainer = document.body.querySelector('.basket__container');

const products = [];
const basketProducts = [];


function registerProduct(product){
  products.push(product);
  const busketProduct = {...product, isAdded: false};
  basketProducts.push(busketProduct);
}

function renderPorsionProduct(menuItemPrice, menuItemTotalPrice, index){
  const currentProduct = products[index];
  const currentBasketProduct = basketProducts[index];

  const basketItem = basketContainer.childNodes[index];

  menuItemPrice.textContent = currentProduct.price;
  menuItemTotalPrice.textContent = currentProduct.totalPrice;

  const basketItemPrice = basketItem.querySelector('.basket__item-price').querySelector('span');
  basketItemPrice.textContent = currentBasketProduct.price;
  const basketItemTotalPrice = basketItem.querySelector('.basket__item-total-price').querySelector('span');
  basketItemTotalPrice.textContent = currentBasketProduct.totalPrice;
}

const makeProductId = (productTitle) => {
  return productTitle.split(' ').join('');
}


for(let i = 0; i < menuItems.length; i++){
  const menuItem = menuItems[i];
  const menuItemImg = menuItem.querySelector('.menu__item-img').src;
  const menuItemTitle = menuItem.querySelector('.menu__item-title').textContent;
  const menuItemDescription = menuItem.querySelector('.menu__item-description').textContent;
  const menuItemPrice = menuItem.querySelector('.menu__item-price').querySelector('span');
  const menuItemWeight = menuItem.querySelector('.menu__item-weight').querySelector('span').textContent;
  const menuItemAmount = menuItem.querySelector('.menu__item-amount').querySelector('span');
  const menuItemTotalPrice = menuItem.querySelector('.menu__item-total-price').querySelector('span');

  const product = {
    id: makeProductId(menuItemTitle),
    img: menuItemImg,
    title: menuItemTitle, 
    description: menuItemDescription, 
    weight: Number(menuItemWeight), 
    price: Number(menuItemPrice.textContent),
    defaultPrice: Number(menuItemPrice.textContent),
    amount: Number(menuItemAmount.textContent),
    totalPrice: Number(menuItemTotalPrice.textContent)
  };

  registerProduct(product);

  const currentProduct = products[i];
  const currentBasketProduct = products[i];

  renderBasket(currentBasketProduct);

  const addToBasketButton = menuItem.lastElementChild;
  addToBasketButton.addEventListener('click', () => {

    const addBasketAmountButton = basketContainer.childNodes[i].querySelector('.basket__item-amount-add');
    const removeBasketAmountButton = basketContainer.childNodes[i].querySelector('.basket__item-amount-remove');

    currentBasketProduct.isAdded = true;
    basketContainer.childNodes[i].classList.add('basket__item_added');

    const removeFromBasketButton = basketContainer.childNodes[i].querySelector('.basket__item-remove-from-basket');
    removeFromBasketButton.addEventListener('click', () => {
      currentBasketProduct.isAdded = false;
      basketContainer.childNodes[i].classList.remove('basket__item_added');
    })

    const select = basketContainer.childNodes[i].querySelector('.basket__item-porsion');
    select.addEventListener('change', (e) => {
      handleSelectChoice(products, basketProducts, i, e.target.value);
      const menuSelect = menuItem.querySelector('.menu__item-porsion');
      menuSelect.value = e.target.value;
      renderPorsionProduct(menuItemPrice, menuItemTotalPrice, i);
    })

    addBasketAmountButton.addEventListener('click', () => {
      currentProduct.amount += 1;
      handleAmountClick(products, menuItemAmount, menuItemTotalPrice, i);
      if(currentProduct.amount >= 1){
        removeAmountButton.removeAttribute('disabled');
        basketContainer.childNodes[i].querySelector('.basket__item-amount-remove').removeAttribute('disabled');
      }
    })
    
    removeBasketAmountButton.addEventListener('click', () => {
      currentProduct.amount -= 1;
      handleAmountClick(products, menuItemAmount, menuItemTotalPrice, i);
      if(currentProduct.amount < 1){
        removeAmountButton.setAttribute('disabled', true);
        basketContainer.childNodes[i].querySelector('.basket__item-amount-remove').setAttribute('disabled', true)
      }
    })
  })



  const addAmountButton = menuItem.querySelector('.menu__item-amount-add');
  const removeAmountButton = menuItem.querySelector('.menu__item-amount-remove');

  const menuSelect = menuItem.querySelector('.menu__item-porsion');
  menuSelect.addEventListener('change', (e) => {
    handleSelectChoice(products, basketProducts, i, e.target.value);
    const select = basketContainer.childNodes[i].querySelector('.basket__item-porsion');
    select.value = e.target.value;
    renderPorsionProduct(menuItemPrice, menuItemTotalPrice, i);
  })

  addAmountButton.addEventListener('click', () => {
    currentProduct.amount += 1;
    handleAmountClick(products, menuItemAmount, menuItemTotalPrice, i);
    if(currentProduct.amount >= 1){
      removeAmountButton.removeAttribute('disabled');
      basketContainer.childNodes[i].querySelector('.basket__item-amount-remove').removeAttribute('disabled');
    }
  })

  removeAmountButton.addEventListener('click', () => {
    currentProduct.amount -= 1;
    handleAmountClick(products, menuItemAmount, menuItemTotalPrice, i);
    if(currentProduct.amount < 1){
      removeAmountButton.setAttribute('disabled', true);
      basketContainer.childNodes[i].querySelector('.basket__item-amount-remove').setAttribute('disabled', true)
    }
  })
}