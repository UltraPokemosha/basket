export const countOrder = (products) => {
  let weight = 0;
  let amount = 0;
  let price = 0;
  let service = 0;
  let toPay = 0;
  for(const product of products){
    weight += product.weight * product.amount;
    amount += product.amount;
    price += product.totalPrice;
  }

  service = price / 100 * 10;
  toPay = price + service;
  
  return {weight, amount, price, service, toPay}
}