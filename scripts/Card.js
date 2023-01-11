/* export default class Card {
  constructor(config, cardTemplate, handleOpenImage) {
    this._title = config.title;
    this._image = config.image;

    this._cardTemplate = cardTemplate;

    this._handleOpenImage = handleOpenImage;
  }

  _getTemplate() {
    const instanceCard = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.element')
      .cloneNode(true);

      return instanceCard;
  }

  generateCard() {
    this._card = this._getTemplate;
    this._cardImg = this._card.querySelector('.element__image');
    this._cardImg.src = this._image;
    this._cardImg.alt = this._title;
    this._card.querySelector('.element__title').textContent = this._title;
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.element__delete');

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleOpenImage(this._name, this._link);
    })

    this._buttonLike.addEventListener('click', () => {
      this._buttonLike.classList.toggle('element_active');
    });

    this._buttonDelete.addEventListener('click', () => {
      this._element.remove();
    })
  }
} */
