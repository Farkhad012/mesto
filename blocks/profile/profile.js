import { showAddForm, showEditForm } from "../form/form.js";
import { openModal, modalTitle } from "../modal/modal.js";

export const editButton = document.querySelector('button.profile__edit-button');
export const addButton = document.querySelector('button.profile__add-button');
export const username = document.querySelector('#username');
export const occupation = document.querySelector('#occupation');

editButton.addEventListener('click', () => {
  openModal();
  showEditForm();  
  modalTitle.textContent = 'Редактировать';
})

addButton.addEventListener('click', () => {
  openModal();
  showAddForm();
  modalTitle.textContent = 'Новое место';
})

