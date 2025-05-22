import { createCard } from "../card/card.js";
import { cardsData } from "../card/cardsData.js";

export const galleryContainer = document.querySelector('.gallery__inner');

export function renderCards() {  
  galleryContainer.innerHTML = '';
  
  cardsData.forEach(cardItem => {
    createCard(cardItem);
  })
}