import { galleryContainer, renderCards } from "../blocks/gallery/gallery.js";
import {
  addButton,
  editButton,
  occupation,
  username,
} from "../blocks/profile/profile.js";
import {
  closeModal,
  modalAddContent,
  modalEditProfile,
  openModal,
} from "../blocks/modal/modal.js";
import {
  editForm,
  occupationInput,
  usernameInput,
} from "../blocks/form/formEdit.js";
import { enableValidation } from "../blocks/form/validate.js";
import { addForm, linkInput, titleInput } from "../blocks/form/formAdd.js";
import { createCard } from "../blocks/card/card.js";

renderCards();

editButton.addEventListener("click", () => {
  openModal(modalEditProfile);

  usernameInput.value = username.textContent;
  occupationInput.value = occupation.textContent;

  enableValidation({
    formSelector: ".form-edit",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "input-error-visible",
  });
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  username.textContent = usernameInput.value;
  occupation.textContent = occupationInput.value;
  closeModal(modalEditProfile);
});

addButton.addEventListener("click", () => {
  openModal(modalAddContent);

  enableValidation({
    formSelector: ".form-add",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "input-error-visible",
  });
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCard = {
    title: titleInput.value,
    link: linkInput.value,
  };

  const cardElement = createCard(newCard);
  galleryContainer.prepend(cardElement);

  closeModal(modalAddContent);
});

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
