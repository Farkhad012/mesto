import { username, occupation, editButton, addButton } from '../blocks/profile/profile.js';
import { modalEdit, modalAdd } from '../blocks/modal/modal.js';
import { userNameInput, occupationInput, formEditButton } from '../blocks/form/form.js';

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

editButton.addEventListener('click', () => {
  modalEdit.classList.add('opened');
  occupationInput.value = occupation.textContent;
  userNameInput.value = username.textContent;

  disableScroll();
})

addButton.addEventListener('click', () => {
  modalAdd.classList.add('opened')

  disableScroll();
})

formEditButton.addEventListener('click', (event) => {
  event.preventDefault();
  occupation.textContent = occupationInput.value;
  username.textContent = userNameInput.value;
  modalEdit.classList.remove('opened');
})

