const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status');

const popupEditElement = document.querySelector('.popup_for_edit');
const popupCloseElement = popupEditElement.querySelector('.popup__close');
const popupOpenElement = profileElement.querySelector('.profile__edit'); //открытие edit

const popupAddElement = document.querySelector('.popup_for_add');
const popupAddClose = popupAddElement.querySelector('.popup__close');
const popupAddCardElement = profileElement.querySelector('.profile__add'); //открытие add

//строки
const formElement = document.querySelector('.popup__inputs');
const nameInput = formElement.querySelector('.popup__add-item_type_name');
const jobInput = formElement.querySelector('.popup__add-item_type_status');

const formAddElement = popupAddElement.querySelector('.popup__inputs_add-item');
const titleInput = formAddElement.querySelector('[name="item-title"]');
const linkInput = formAddElement.querySelector('[name="item-link"]');

const buttonSubmit = popupAddElement.querySelector('.popup__button');

const handleKeyUp = (e) => {
  if(e.key === 'Escape') {
  const openPopup = document.querySelector('.popup_opened');
  closePopup(openPopup);
  }
}

const handleOverlay = (e) => {
  if(!e.target.closest('.popup__container')) {
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
  button.disabled = 'disabled';
}

// переключатели Add
popupAddCardElement.addEventListener('click', function () {
  openPopup(popupAddElement);
  disableButton(buttonSubmit)
})

popupAddClose.addEventListener('click', function () {
  closePopup(popupAddElement);
})

// переключатели Edit
popupOpenElement.addEventListener('click', function () {
  openPopup(popupEditElement);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
})

popupCloseElement.addEventListener('click', function () {
  closePopup(popupEditElement);
})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(popupEditElement);
}

formElement.addEventListener('submit', handleProfileFormSubmit);



// Попап 2

const initialCards = [
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

// список в разметке

const elementsContainer = document.querySelector('.elements');

//темплейт
const elementTemplate =
  document.querySelector('#elements-template');

//лайк и делит
const handleDeleteCard = (event) => {
  event.target.closest('.element').remove();
}

const handleLikekCard = (event) => {
  event.target.classList.toggle('element_active');
}

function generateCard(dataCard) {
  const newCard = elementTemplate.content.cloneNode(true); //клон массива

  const titleElement = newCard.querySelector('.element__title'); //название
  titleElement.textContent = dataCard.title;

  const imageElement = newCard.querySelector('.element__image'); //картинка
  imageElement.src = dataCard.image;
  imageElement.alt = dataCard.title;

  imageElement.addEventListener('click', function () {
    hendelImage(dataCard)
  })

  const hendelImage = (dataCard) => {
    popupCardTitile.textContent = dataCard.title;
    popupImageBtn.src = dataCard.image;
    popupImageBtn.alt = dataCard.title;

    openPopup(popupCard);
  }

  const elementLikeButton = newCard.querySelector('.element__like'); //лайк
  elementLikeButton.addEventListener('click', handleLikekCard)

  const elementDeleteButton = newCard.querySelector('.element__delete'); //удаление
  elementDeleteButton.addEventListener('click', handleDeleteCard)

  return newCard;
}

const renderCard = (dataCard, wrapElement) => {
  const elementNew = generateCard(dataCard)
  wrapElement.prepend(elementNew);
}

initialCards.forEach(function (dataCard) {
  renderCard(dataCard, elementsContainer)
})

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const addElement = {
    title: titleInput.value,
    image: linkInput.value
  }

  renderCard(addElement, elementsContainer)

  evt.target.reset()
  closePopup(popupAddElement);

}


formAddElement.addEventListener('submit', handleAddFormSubmit);


//Попап 3

const popupCard = document.querySelector('.popup_for_card');
const popupImageClose = popupCard.querySelector('.popup__close_full-image');
const popupImageBtn = popupCard.querySelector('.popup__card-image');
const popupCardTitile = popupCard.querySelector('.popup__card-title');

popupImageClose.addEventListener('click', function () {
  closePopup(popupCard);
})


popupEditElement.addEventListener("click", handleOverlay);
popupAddElement.addEventListener("click", handleOverlay);
popupCard.addEventListener("click", handleOverlay);
