import { cardsData } from "../card/cardsData.js";
import { renderCards } from "../gallery/gallery.js";
import { closeModal } from "../modal/modal.js";

// элементы формы редактирования данных
export const userNameInput = document.querySelector('#name-input');
export const occupationInput = document.querySelector('#occupation-input');
export const formEditButton = document.querySelector('#form__edit-button');

// элементы формы добавления карточек
export const addForm = document.querySelector('#content-add-form');
export const editForm = document.querySelector('#profile-edit-form');
export const titleInput = document.querySelector('input#title');
export const linkInput = document.querySelector('input#link');

export function showAddForm() {
  addForm.classList.add('form-add-visible');
}

export function showEditForm() {
  editForm.classList.add('form-edit-visible');
}

export function hideForms() {
  addForm.classList.remove('form-add-visible');
  editForm.classList.remove('form-edit-visible');
}

export function handleAddFormSubmit() {
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCard = {
      title: titleInput.value,
      link: linkInput.value
    }

    cardsData.unshift(newCard);

    renderCards();
    addForm.reset();
    closeModal();
  })
}

export function handleEditFormSubmit() {
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    occupation.textContent = occupationInput.value;
    username.textContent = userNameInput.value;

    editForm.reset();
    closeModal();
  })
}