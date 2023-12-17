const menuOrder =  document.body.querySelector('.menu__order');
const orderWeight = menuOrder.querySelector('.menu__order-li_weight').querySelector('span');
const orderAmount = menuOrder.querySelector('.menu__order-li_amount').querySelector('span');
const orderPrice = menuOrder.querySelector('.menu__order-li_total-price').querySelector('span');
const orderService = menuOrder.querySelector('.menu__order-li_service').querySelector('span');
const orderToPay = menuOrder.querySelector('.menu__order-price-to-pay-title').querySelector('span');

export function renderOrder(order){
  orderWeight.textContent = order.weight;
  orderAmount.textContent = order.amount;
  orderPrice.textContent = order.price;
  orderService.textContent = order.service;
  orderToPay.textContent = order.toPay;
}