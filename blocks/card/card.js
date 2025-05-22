import { Card } from "../../scripts/Card.js";
import { modalImgView, openModal } from "../modal/modal.js";
import { popupDescription, popupImage } from "../popup/popup.js";

export const cardTemplate = document.querySelector(".card-template");

export function createCard(card) {
  const cardElement = new Card(card, cardTemplate, () => {
    openModal(modalImgView);
    popupImage.src = card.link;
    popupDescription.textContent = card.title;
  });

  return cardElement.generateCard();
}
