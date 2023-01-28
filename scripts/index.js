import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

/* const profile = document.querySelector('.profile'); */
const profileName = '.profile__name';
const profileStatus = '.profile__status';

const popupEdit = '.popup_for_edit';
/* const popupEditClose = popupEdit.querySelector('.popup__close'); */
const popupOpenEditForm = document.querySelector('.profile__edit'); //открытие edit

const popupAdd = '.popup_for_add';
/* const popupAddClose = popupAdd.querySelector('.popup__close'); */
const popupAddCard = document.querySelector('.profile__add'); //открытие add

//строки
/* const formEditProfile = document.querySelector('.popup__inputs_edit-item'); */
const nameInput = document.querySelector('.popup__add-item_type_name');
const jobInput = document.querySelector('.popup__add-item_type_status');

/* const formAddCard = popupAdd.querySelector('.popup__inputs_add-item'); */
/* const titleInput = formAddCard.querySelector('[name="item-title"]');
const linkInput = formAddCard.querySelector('[name="item-link"]');

const buttonAddSubmit = popupAdd.querySelector('.popup__button_add'); */

// Попап 2

// список в разметке

const cardsContainer = '.elements';

//темплейт
const cardTemplate = '#elements-template';

// Попап 3
const popupCard = '.popup_for_card';
/* const popupImageClose = popupCard.querySelector('.popup__close_full-image'); */

const handleOpenImage = new PopupWithImage(popupCard);

const handleCardClick = (title, image) => {
  handleOpenImage.open(title, image);
}

function generateCard(config) {
  const newCard = new Card(
    {
      title: config.title,
      image: config.image,
    },
    cardTemplate,
    handleCardClick
  );
  return newCard.generateCards();
}

const renderCard = new Section({
  items: initialCards,
  renderer: (config) => {
    const newElement = generateCard(config);
    renderCard.addItem(newElement);
  },
}, cardsContainer);

renderCard.renderItems();
debugger;
const handleEditProfile = (/* evt,  */inputValues) => {
  /* evt.preventDefault(); */
  const { username, job } = inputValues;
  userInfo.setUserInfo(username, job);
  popupProfile.close();
};

const popupProfile = new PopupWithForm(
  popupEdit,
  handleEditProfile
);

const handleCardAdd = (/* evt,  */inputValues) => {
  /* evt.preventDefault(); */
  /* evt; */
  const { text, link } = inputValues;

  const elementCard = generateCard({ title: text, image: link });
  renderCard.addItem(elementCard);
  popupCardAdd.close();
};


const popupCardAdd = new PopupWithForm(
  popupAdd,
  handleCardAdd
);

const userInfo = new UserInfo({
  profileName,
  profileStatus,
});

const handleEditProfileValue = () => {
  const { username, job } = userInfo.getUserInfo();

  /* const form = document.querySelector('.popup__inputs_edit-item'); */
  nameInput.value = username;
  jobInput.value = job;

  popupProfile.open();
};

/* const popupImageBtn = popupCard.querySelector('.popup__card-image');
const popupCardTitle = popupCard.querySelector('.popup__card-title'); */


/* const handleKeyUp = (e) => {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
} */

/* const handleOverlayClick = (e) => {
  if (!e.target.closest('.popup__container')) {
    closePopup(e.target);
    validationAddForm.resetValidation();
    validationEditForm.resetValidation();
    hideInputValue();
  }
} */

/* const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleKeyUp);
} */

/* const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleKeyUp);
} */

/* const hideInputValue = function () {
  titleInput.value = '';
  linkInput.value = '';
} */

// переключатели Add
/* popupAddCard.addEventListener('click', function () {
  openPopup(popupAdd);
  validationAddForm.disableButton(buttonAddSubmit);
})

popupAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
  validationAddForm.resetValidation();
  hideInputValue();
}) */

// переключатели Edit
/* popupOpenEditForm.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
})

popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
  validationEditForm.resetValidation();
}) */

/* function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(popupEdit);
} */

/* formEditProfile.addEventListener('submit', handleProfileFormSubmit); */


/* const handleOpenImage = (title, image) => {
  popupCardTitle.textContent = title;
  popupImageBtn.src = image;
  popupImageBtn.alt = title;

  openPopup(popupCard);
} */



/* const renderCard = (element) => {
  cardsContainer.prepend(element);
}; */

/* initialCards.forEach((item) => {
  const cardElement = generateCard(item, cardTemplate);
  renderCard(cardElement);
}); */

/* function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardData = generateCard({
    title: titleInput.value,
    image: linkInput.value,
  });

  renderCard.addItem(cardData)

  evt.target.reset()
  closePopup(popupAdd);

} */

const validationEditForm = new FormValidator(validationConfig, '.popup__inputs_edit-item');
const validationAddForm = new FormValidator(validationConfig, '.popup__inputs_add-item');

validationEditForm.enableValidation();
validationAddForm.enableValidation();

/* прослушиватель клика редактирования профиля */
popupOpenEditForm.addEventListener("click", handleEditProfileValue);

/* прослушиватель клика добавления формы */
popupAddCard.addEventListener("click", function () {
  popupCardAdd.open();
});


/* formAddCard.addEventListener('submit', handleAddFormSubmit); */

/* popupImageClose.addEventListener('click', function () {
  closePopup(popupCard);
}) */

/*
popupEdit.addEventListener("click", handleOverlayClick);
popupAdd.addEventListener("click", handleOverlayClick);
popupCard.addEventListener("click", handleOverlayClick); */
