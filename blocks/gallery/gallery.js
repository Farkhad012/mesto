import { cardTemplate } from "../card/card.js";
import { cardsData } from "../card/cardsData.js";
import { modalImgView, openModal } from "../modal/modal.js";
import { popupDescription, popupImage } from "../popup/popup.js";
import { Card } from "../../scripts/Card.js";

export const galleryContainer = document.querySelector('.gallery__inner');

export function renderCards() {  
  galleryContainer.innerHTML = '';
  
  cardsData.forEach(cardItem => {
    const cardElement = new Card(cardItem, cardTemplate, () => {
      openModal(modalImgView);
      popupImage.src = cardItem.link;
      popupDescription.textContent = cardItem.title;
    });
    
    galleryContainer.append(cardElement.generateCard());
  })
}