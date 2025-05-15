import { createCard } from "../card/card.js";
import { cardsData } from "../card/cardsData.js";

export const galleryContainer = document.querySelector('.gallery__inner');

// функция рендеринга карточек на странице
export function renderCards() {  
  galleryContainer.innerHTML = '';
  
  cardsData.forEach((card) => {
    const cardElement = createCard(card);
    galleryContainer.append(cardElement);
  })
}