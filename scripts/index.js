import {
  username,
  occupation,
  editButton,
  addButton
} from '../blocks/profile/profile.js';
import {
  modalEdit,
  modalAdd,
  enableScroll,
  disableScroll
} from '../blocks/modal/modal.js';
import {
  userNameInput,
  occupationInput,
  formEditButton,
  addForm,
  titleInput,
  linkInput,
} from '../blocks/form/form.js';
import { renderCards } from '../blocks/gallery/gallery.js';
import { cardsData } from '../blocks/card/cardsData.js';
import { deleteCard } from '../blocks/card/deleteCard.js';
import { likeCard } from '../blocks/card/likeCard.js';


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

formEditButton.addEventListener('click', (e) => {
  e.preventDefault();

  occupation.textContent = occupationInput.value;
  username.textContent = userNameInput.value;
  modalEdit.classList.remove('opened');
  enableScroll()
})

// обработчик для формы addForm
addForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // создаем карточку
  const newCard = {
    title: titleInput.value,
    link: linkInput.value
  }

  // добавляем ее в массив 
  cardsData.unshift(newCard);

  // отображаем карточки на странице
  renderCards();

  // очищаем форму
  addForm.reset();

  // закрываем модальное окно с формой
  // modalAdd.classList.remove('opened');

  // включаем скролл страницы
  enableScroll()
})

renderCards()

likeCard();

