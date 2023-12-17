const basketOpenButton = document.body.querySelector('.basket-button_open');
basketOpenButton.addEventListener('click', (e) => {
  const basket = document.body.querySelector('.basket');
  basket.classList.add('basket_opened');
})

const basketCloseButton = document.body.querySelector('.basket-button_close');
basketCloseButton.addEventListener('click', (e) => {
  const basket = document.body.querySelector('.basket');
  basket.classList.remove('basket_opened');
})


export default {}