const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__close');
const popupOpenElement = document.querySelector('.profile__edit');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__user-name');
const jobInput = formElement.querySelector('.popup__user-status');

const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

popupOpenElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
