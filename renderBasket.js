const basketContainer = document.body.querySelector('.basket__container');

export function renderBasket(basketProduct){
  const content = 
  `<div class="basket__item ${basketProduct.isAdded ? 'basket__item_added': ''}">
    <img src="${basketProduct.img}" alt="" class="menu__item-img" />
    <h2 class="basket__item-title">${basketProduct.title}</h2>
    <p class="basket__item-description">${basketProduct.description}</p>
    <div class="basket__item-info">
      <p class="basket__item-weight"><span>${basketProduct.weight}</span>гр</p>
      <p class="basket__item-price"><span>${basketProduct.price}</span>р</p>
      <div class="basket__item-size">
        <span class="basket__item-size-title">Порция</span>
        <select class="basket__item-porsion">
            <option value="small">Маленькая</option>
            <option value="medium">Средняя</option>
            <option value="large">Большая</option>
        </select>
      </div>
      <div class="basket__item-amount">
        <button class="basket__item-amount-remove" disabled>-</button>
        <span>${basketProduct.amount}</span>
        <button class="basket__item-amount-add">+</button>
      </div>
      <p class="basket__item-total-price"><span>${basketProduct.totalPrice}</span>р</p>
    </div>
    <button class="basket__item-remove-from-basket">Удалить из корзины</button>
  </div>`;

  basketContainer.innerHTML += content;
}