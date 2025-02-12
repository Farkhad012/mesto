import { username, occupation, editButton, addButton } from '../blocks/profile/profile.js';
import { openModal, closeModal, disableScroll, enableScroll } from '../blocks/modal/modal.js';
import {
  userNameInput,
  occupationInput,
  formEditButton,
  handleAddFormSubmit,
  handleEditFormSubmit,
} from '../blocks/form/form.js';
import { renderCards } from '../blocks/gallery/gallery.js';
import { cardsData } from '../blocks/card/cardsData.js';


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


