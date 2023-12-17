export function setPorsion(defaultPrice, currentProduct, currentBasketProduct, value) {
  let price;
  if(value === 'small') price = defaultPrice;
  else if(value === 'medium') price = currentProduct.defaultPrice * 2;
  else price = currentProduct.defaultPrice * 3;
  currentProduct.price = price;
  currentBasketProduct.price = price;
}

