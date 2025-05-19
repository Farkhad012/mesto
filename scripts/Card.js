import { galleryContainer } from "../blocks/gallery/gallery.js";

export class Card {
  constructor(card, cardTemplate, clickFunction) {
    this._link = card.link;
    this._title = card.title;
    this._cardTemplate = cardTemplate;
    this._clickFunction = clickFunction;
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this.setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }

  likeCard() {
    this._element.classList.toggle("active");
    const likeIcon = this._element.querySelector('.card__like-icon');
    likeIcon.src = this._element.classList.contains("active")
          ? "../images/icons/like-active.svg"
          : "../images/icons/like-disabled.svg";
    
  }

  deleteCard() {
    if (this._element) {
      this._element.remove();
    }
  }

  setEventListeners() {
    this._element.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("card__image")) {
        this._clickFunction();
      }

      if (e.target.classList.contains("card__like-button")) {
        this.likeCard();
      }

      if (e.target.classList.contains("card__delete-button")) {
        this.deleteCard();
      }
    });
  }
}
