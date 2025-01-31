import { editButton, addButton } from '../blocks/profile/profile.js';
import { modalEdit, modalAdd } from '../blocks/modal/modal.js';

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

editButton.addEventListener('click', () => {
  modalEdit.classList.add('opened');
  disableScroll()
})

addButton.addEventListener('click', () => {
  modalAdd.classList.add('opened')
  disableScroll()
})
