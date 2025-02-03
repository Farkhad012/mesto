import { createCard } from "../card/card.js";
import { cardsData } from "../card/cardsData.js";

// функция рендеринга карточек на странице
export function renderCards() {
  const container = document.querySelector('.gallery__inner');
  container.innerHTML = '';
  
  cardsData.forEach((card) => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
  })
}
