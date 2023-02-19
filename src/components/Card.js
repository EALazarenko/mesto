export class Card {
  constructor({ data, cardTemplate, userId, handleCardClick, handleDeleteClick, handleSetLike, handleRemoveLike }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;

    this._templateSelector = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
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
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._card.querySelector('.element__title').textContent = this._name;
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.element__delete');
    this._numberLikes = this._card.querySelector('.element__number-likes');
    this._numberLikes.textContent = this._likes.length;

    this._hideBtnDelete();
    this._isLiked();

    this._setEventListeners();

    return this._card;
  }

  handleLikeClick(data) {
    this._likes = data.likes;
    this._numberLikes.textContent = this._likes.length;
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
    if (this._userId !== this._ownerId) {
      this._buttonDelete.remove();
      this._buttonDelete = null;
    }
  }

  _isLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this.addLike();
    }
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  setLikesNumb(res) {
    this._numberLikes.textContent = `${res.likes.length}`;
  }

  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleImageClick();
    })

    this._buttonLike.addEventListener('click', () => {
      if (this._buttonLike.classList.contains('element_active')) {
        this._handleRemoveLike(this._id);
      } else {
        this._handleSetLike(this._id);
      }
    });

    this._buttonDelete?.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    })
  }
}
