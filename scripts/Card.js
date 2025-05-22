export class Card {
  constructor(cardData, cardTemplate, handleCardClick) {
    this._link = cardData.link;
    this._title = cardData.title;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;

    this._element = null;
    this._likeButton = null;
    this._likeIcon = null;
    this._deleteButton = null;
  }

  _getTemplate() {
    return this._cardTemplate.content.querySelector(".card").cloneNode(true);
  }

  _setElements() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeIcon = this._element.querySelector(".card__like-icon");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
  }

  _fillCardData() {
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}`;
    this._cardTitle.textContent = this._title;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("active");
    this._likeIcon.src = this._likeButton.classList.contains("active")
      ? "../images/icons/like-active.svg"
      : "../images/icons/like-disabled.svg";
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleDeleteClick());
    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setElements();
    this._fillCardData();
    this._setEventListeners();

    return this._element;
  }
}
