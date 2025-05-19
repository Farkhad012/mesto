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
  modalImgView,
  openModal,
} from "../blocks/modal/modal.js";
import {
  editForm,
  occupationInput,
  usernameInput,
} from "../blocks/form/formEdit.js";
import { addForm, linkInput, titleInput } from "../blocks/form/formAdd.js";
import { cardTemplate } from "../blocks/card/card.js";
import { popupDescription, popupImage } from "../blocks/popup/popup.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

renderCards();

editButton.addEventListener("click", () => {
  openModal(modalEditProfile);

  usernameInput.value = username.textContent;
  occupationInput.value = occupation.textContent;
  editFormValidator.toggleSubmitButton();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (editFormValidator.hasInvalidInput()) {
    return;
  }

  username.textContent = usernameInput.value;
  occupation.textContent = occupationInput.value;

  closeModal(modalEditProfile);
});

addButton.addEventListener("click", () => {
  openModal(modalAddContent);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (addFormValidator.hasInvalidInput()) {
    return;
  }

  const newCard = {
    title: titleInput.value,
    link: linkInput.value,
  };

  const cardElement = new Card(newCard, cardTemplate, () => {
    openModal(modalImgView);
    popupImage.src = newCard.link;
    popupDescription.textContent = newCard.title;
  });

  galleryContainer.prepend(cardElement.generateCard());

  closeModal(modalAddContent); 

  addForm.reset();
  addFormValidator.toggleSubmitButton();
});

const editFormValidator = new FormValidator(
  {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "input-error-visible",
  },
  editForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "input-error-visible",
  },
  addForm
);

addFormValidator.enableValidation();
