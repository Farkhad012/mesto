export function deleteCard() {
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__delete-button')) {
      const cardElement = e.target.closest('.card');
      if(cardElement) {
        cardElement.remove();
      }
    }
  })
}