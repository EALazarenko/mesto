/* import { Card } from "./Card.js"; */

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileStatus = profile.querySelector('.profile__status');

const popupEdit = document.querySelector('.popup_for_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupOpenEditForm = profile.querySelector('.profile__edit'); //открытие edit

const popupAdd = document.querySelector('.popup_for_add');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupAddCard = profile.querySelector('.profile__add'); //открытие add

//строки
const formEditProfile = document.querySelector('.popup__inputs_edit-item');
const nameInput = formEditProfile.querySelector('.popup__add-item_type_name');
const jobInput = formEditProfile.querySelector('.popup__add-item_type_status');

const formAddCard = popupAdd.querySelector('.popup__inputs_add-item');
const titleInput = formAddCard.querySelector('[name="item-title"]');
const linkInput = formAddCard.querySelector('[name="item-link"]');

const buttonAddSubmit = popupAdd.querySelector('.popup__button_add');

// Попап 2

// список в разметке

const cardsContainer = document.querySelector('.elements');

//темплейт
const cardTemplate = document.querySelector('#elements-template');

// Попап 3
const popupCard = document.querySelector('.popup_for_card');
const popupImageClose = popupCard.querySelector('.popup__close_full-image');
const popupImageBtn = popupCard.querySelector('.popup__card-image');
const popupCardTitle = popupCard.querySelector('.popup__card-title');



const handleKeyUp = (e) => {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const handleOverlayClick = (e) => {
  if (!e.target.closest('.popup__container')) {
    closePopup(e.target);
  }
}

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleKeyUp);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleKeyUp);
}

function disableButton(button) {
  button.classList.add('popup__button_disabled');
  button.disabled = true;
}

// переключатели Add
popupAddCard.addEventListener('click', function () {
  openPopup(popupAdd);
  disableButton(buttonAddSubmit)
})

popupAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
})

// переключатели Edit
popupOpenEditForm.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
})

popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(popupEdit);
}

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

class Card {
  constructor(config, templateSelector, handleOpenImage) {
    this._title = config.title;
    this._image = config.image;

    this._templateSelector = templateSelector;
    this._handleOpenImage = handleOpenImage;
  }

  _getTemplate() {
    const instanceCard = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

      return instanceCard;
  }

  generateCards() {
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
}

 const handleOpenImage = (title, image) => {
    popupCardTitle.textContent = title;
    popupImageBtn.src = image;
    popupImageBtn.alt = title;

    openPopup(popupCard);
 }
//лайк и делит
/* const handleDeleteCard = (event) => {
  event.target.closest('.element').remove();
}

const handleLikeCard = (event) => {
  event.target.classList.toggle('element_active');
} */

function generateCard(config, templateSelector) {
  const newCard = new Card(
    {
      title: config.title,
      image: config.image,
    },
    templateSelector,
    handleOpenImage
  )

  /* const titleCard = newCard.querySelector('.element__title'); //название
  titleCard.textContent = dataCard.title;

  const imageCard = newCard.querySelector('.element__image'); //картинка
  imageCard.src = dataCard.image;
  imageCard.alt = dataCard.title; */

  /* imageCard.addEventListener('click', function () {
    handleOpenImage()
  }) */

  /* const buttonLike = newCard.querySelector('.element__like'); //лайк
  buttonLike.addEventListener('click', handleLikeCard)

  const buttonDelete = newCard.querySelector('.element__delete'); //удаление
  buttonDelete.addEventListener('click', handleDeleteCard) */

  return newCard.generateCards();
}

/* const renderCard = (dataCard, wrapElement) => {
  const elementNew = generateCard(dataCard)
  wrapElement.prepend(elementNew);
} */

/* initialCards.forEach((item) => {
  renderCard(dataCard, cardsContainer)
}) */

const renderCard = (element) => {
  cardsContainer.prepend(element);
};

initialCards.forEach((item) => {
  const cardElement = generateCard(item, templateSelector);
  renderCard(cardElement);

});

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardData = generateCard({
    title: titleInput.value,
    image: linkInput.value,
  },
  templateSelector
  );

  renderCard(cardData)

  evt.target.reset()
  closePopup(popupAdd);

}

formAddCard.addEventListener('submit', handleAddFormSubmit);

popupImageClose.addEventListener('click', function () {
  closePopup(popupCard);
})


popupEdit.addEventListener("click", handleOverlayClick);
popupAdd.addEventListener("click", handleOverlayClick);
popupCard.addEventListener("click", handleOverlayClick);
