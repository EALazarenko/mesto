export const profileName = '.profile__name';
export const profileStatus = '.profile__status';
export const avatarImg = '.profile__avatar';

export const popupEdit = '.popup_for_edit';

export const popupOpenEditForm = document.querySelector('.profile__edit'); //открытие edit

export const popupAdd = '.popup_for_add';
export const popupAddCard = document.querySelector('.profile__add'); //открытие add

export const nameInput = document.querySelector('.popup__add-item_type_name');
export const jobInput = document.querySelector('.popup__add-item_type_status');

export const cardsContainer = '.elements';

export const popupAvatar = '.popup_for_avatar';
export const popupConfirmation = '.popup_for_confirmation';

export const popupSaveAvatar = document.querySelector('.profile__avatar-button');


//темплейт
export const cardTemplate = '#elements-template';

export const popupCard = '.popup_for_card';

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__add-item_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
  {
    title: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
