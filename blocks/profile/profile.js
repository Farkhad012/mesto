import { occupationInput, nameInput } from "../form/formEdit.js";
import { modalAddContent, modalEditProfile, openModal } from "../modal/modal.js";

export const editButton = document.querySelector('button.profile__edit-button');
export const addButton = document.querySelector('button.profile__add-button');
export const username = document.querySelector('#username');
export const occupation = document.querySelector('#occupation');

export function handleClickAdd() {
  addButton.addEventListener('click', () => {
    openModal(modalAddContent);
  })
}

export function openProfileEditForm() {
  openModal(modalEditProfile);
  
  occupationInput.value = occupation.textContent;
  nameInput.value = username.textContent;
}

export function openAddContentForm() {
  openModal(modalAddContent);
}


