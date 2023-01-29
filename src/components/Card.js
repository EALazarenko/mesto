export class Card {
  constructor(config, templateSelector, handleCardClick) {
    this._title = config.title;
    this._image = config.image;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const instanceCard = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return instanceCard;
  }

  generateCards() {
    this._card = this._getTemplate();

    this._cardImg = this._card.querySelector('.element__image');
    this._cardImg.src = this._image;
    this._cardImg.alt = this._title;
    this._card.querySelector('.element__title').textContent = this._title;
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.element__delete');

    this._setEventListeners();

    return this._card;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('element_active');
  }

  _deleteCard() {
    this._card.remove();
  }

  _handleImageClick() {
    this._handleCardClick(this._title, this._image);
  }

  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleImageClick();
    })

    this._buttonLike.addEventListener('click', () => {
      this._toggleLike();
    });

    this._buttonDelete.addEventListener('click', () => {
      this._deleteCard();
    })
  }
}
