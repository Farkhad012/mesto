import { createCard } from '../blocks/card/card.js';

import { galleryContainer, renderCards } from '../blocks/gallery/gallery.js';
import {
  addButton,
  editButton,
  occupation,
  openAddContentForm,
  openProfileEditForm,
  username
} from '../blocks/profile/profile.js';

import { editForm, nameInput, occupationInput } from '../blocks/form/formEdit.js';
import { addForm, linkInput, titleInput } from '../blocks/form/formAdd.js';

import { closeModal, modalImgView, openModal } from '../blocks/modal/modal.js';
import { popupDescription, popupImage } from '../blocks/popup/popup.js';
import { enableValidation } from '../blocks/form/validate.js';

renderCards()

editButton.addEventListener('click', () => {
  openProfileEditForm();
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  occupation.textContent = occupationInput.value;
  username.textContent = nameInput.value;

  closeModal();
})

addButton.addEventListener('click', () => {
  openAddContentForm();
})

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newCard = {
    title: titleInput.value,
    link: linkInput.value
  }

  const cardElement = createCard(newCard);
  galleryContainer.prepend(cardElement);

  addForm.reset();

  closeModal();
})

function likeCard(likeElement) {
  likeElement.classList.toggle('active');
  const img = likeElement.querySelector('img');
  if (img) {
    img.src = likeElement.classList.contains('active')
      ? './images/icons/like-active.svg'
      : './images/icons/like-disabled.svg';
  }
};

function deleteCard(cardElement) {
  if (cardElement) {
    cardElement.remove();
  }
};

galleryContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__image')) {
    openModal(modalImgView);
    popupImage.src = e.target.src;
    popupDescription.textContent = e.target.alt;
  }

  if (e.target.classList.contains('card__like-button')) {
    likeCard(e.target)
  }

  if (e.target.classList.contains('card__delete-button')) {
    deleteCard(e.target.closest('.card'));
  }
})

enableValidation({
  formSelector: '.form-edit',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  activeErrorClass: 'input-error-active',
})

enableValidation({
  formSelector: '.form-add',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  activeErrorClass: 'input-error-active',
})