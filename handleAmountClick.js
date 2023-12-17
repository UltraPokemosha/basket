import { countOrder } from './countOrder.js';
import { renderOrder } from './renderOrder.js';
import { countTotalPrice } from './countTotalPrice.js';

const basketContainer = document.body.querySelector('.basket__container');

export function handleAmountClick(products, menuItemAmount, menuItemTotalPrice, index) {
  const currentProduct = products[index];
  const currentBasketProduct = products[index];

  currentProduct.totalPrice = countTotalPrice(currentProduct.price, currentProduct.amount);

  currentBasketProduct.amount = currentProduct.amount;
  currentBasketProduct.totalPrice = currentProduct.totalPrice;

  menuItemAmount.textContent = currentProduct.amount;
  menuItemTotalPrice.textContent = currentProduct.totalPrice;

  basketContainer.childNodes[index].querySelector('.basket__item-amount').querySelector('span').textContent = currentBasketProduct.amount
  basketContainer.childNodes[index].querySelector('.basket__item-total-price').querySelector('span').textContent =  currentBasketProduct.totalPrice;

  const order = countOrder(products);
  renderOrder(order);
}