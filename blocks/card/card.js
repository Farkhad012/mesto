// функция создания карточки
export function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const html = `
    <img class="card__image" src="${card.link}" alt="${card.title}">
    <div class="card__description">
      <h2 class="card__title h2">${card.title}</h2>
      <button class="card__like-button button">
        <img src="./images/icons/like-disabled.svg" alt="" width="22" height="19">
      </button>
    </div>
    <button class="card__delete-button button">
        <img src="./images/icons/delete.svg" alt="" width="18" height="19">
    </button>
  `;

  cardElement.innerHTML = html;
  return cardElement;
}