export class Card {
  constructor(config, templateSelector, handleCardClick, handleLikeClick, handleDeleteClick) {
    this._config = config;
    this._title = config.title;
    this._image = config.image;
    this._id = config._id;
    this._likes = config.likes;
    this._ownerId = config.owner_id;
    this._userId = config.userId;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
    this._numberLikes = this._card.querySelector('.element__number-likes');
    this._numberLikes.textContent = `${this._likes.length}`;

    this._hideBtnDelete();
    this._isLiked();
    this._setEventListeners();

    return this._card;
  }

  _handleLikeClick() {
    this._buttonLike.classList.toggle('element_active');
  }

  addLike() {
    this._buttonLike.classList.add('element_active');
  }

  removeLike() {
    this._buttonLike.classList.remove('element_active');
  }

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _hideBtnDelete() {
    if (this._id !== this._ownerId) {
      this._buttonDelete.remove();
      this._buttonDelete = null;
    }
  }

  _isLiked() {
    if (this._likes.some((user) => {
      return this.user_id === user._id;
    })) {
      addLike;
    }
  }

  _handleImageClick() {
    this._handleCardClick(this._title, this._image);
  }

  setLikesNumb(res) {
    this._numberLikes.textContent = `${res.likes.length}`;
}

  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleImageClick();
    })

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._buttonDelete.addEventListener('click', () => {
      this.deleteCard(this._id);
    })
  }
}
