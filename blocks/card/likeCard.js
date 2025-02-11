export function likeCard() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card__like-button')) {
      e.target.classList.toggle('active');
      const img = e.target.querySelector('img');
      if (img) {
        img.src = e.target.classList.contains('active')
          ? './images/icons/like-active.svg'
          : './images/icons/like-disabled.svg';
      }
    }
    console.log(e.target.classList)
  })
}
