import { hideFormContent } from "../form/form.js";
import { openModal } from "../modal/modal.js";

export const popup = document.querySelector('.popup');
export const popupImage = popup.querySelector('img.popup__image');
export const popupImageDescription = popup.querySelector('figcaption.popup__description');

function showPopup() {
  popup.classList.add('popup-visible');
  hideFormContent();
}

export function hidePopup() {
  popup.classList.remove('popup-visible');
}

export function openPopup() {

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card__image')) {
      openModal();
      showPopup();

      popupImage.src = e.target.src;
      popupImageDescription.textContent = e.target.alt;
    }
  })
}

