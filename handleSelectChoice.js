import { countOrder } from "./countOrder.js";
import { renderOrder } from "./renderOrder.js";
import { setPorsion } from "./setPorsion.js";
import { countTotalPrice } from "./countTotalPrice.js";

export function handleSelectChoice(products, basketProducts, index, value){
  const currentProduct = products[index];
  const currentBasketProduct = basketProducts[index];

  setPorsion(currentProduct.defaultPrice, currentProduct, currentBasketProduct, value);

  currentProduct.totalPrice = countTotalPrice(currentProduct.price, currentProduct.amount);

  currentBasketProduct.amount = currentProduct.amount;
  currentBasketProduct.totalPrice = currentProduct.totalPrice;

  const order = countOrder(products);
  renderOrder(order);
  
}