import { username, occupation, editButton, addButton } from '../blocks/profile/profile.js';
import { openModal, closeModal, disableScroll, enableScroll } from '../blocks/modal/modal.js';
import {
  userNameInput,
  occupationInput,
  handleAddFormSubmit,
  handleEditFormSubmit,
} from '../blocks/form/form.js';
import { renderCards } from '../blocks/gallery/gallery.js';
import { deleteCard } from '../blocks/card/deleteCard.js';
import { likeCard } from '../blocks/card/likeCard.js';
import { openPopup } from '../blocks/popup/popup.js';


editButton.addEventListener('click', () => {
  openModal();

  occupationInput.value = occupation.textContent;
  userNameInput.value = username.textContent;

  disableScroll();
})

addButton.addEventListener('click', () => {
  openModal();
  disableScroll();
})

// обработчик для формы editForm
handleEditFormSubmit();

// обработчик для формы addForm
handleAddFormSubmit();

renderCards()

likeCard();
deleteCard();
openPopup();
