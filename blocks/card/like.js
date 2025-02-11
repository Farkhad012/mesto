export function likeCard() {
  const likeButtons = Array.from(document.querySelectorAll('button.card__like-button'));
  console.log(likeButtons);

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('active');
    })
  })
}