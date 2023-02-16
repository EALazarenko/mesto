import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js"
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";


import {
  validationConfig,
  /* initialCards, */
  profileName,
  profileStatus,
  popupEdit,
  popupOpenEditForm,
  popupAdd,
  popupAddCard,
  nameInput,
  jobInput,
  cardsContainer,
  cardTemplate,
  popupCard,
  popupAvatar,
  popupConfirmation,
  popupSaveAvatar,
  avatarImg
} from "../utils/constants.js";
import { data } from "autoprefixer";

// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '872631fc-34b5-4c0e-9953-de36451ae843',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userInfo.id = userData._id;

    renderCard.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });


const handleOpenImage = new PopupWithImage(popupCard);
handleOpenImage.setEventListeners();

const handleCardClick = (title, image) => {
  handleOpenImage.open(title, image);
};

const confirmPopup = new PopupWithConfirmation(popupConfirmation);
confirmPopup.setEventListeners();

const handleDeleteClick = (id) => {
  confirmPopup.open();
  confirmPopup.submitRemove(() => {
    api
      .deleteCard(id)
      .then(() => {
        confirmPopup.close();
        newCard.deleteCard();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  })
};

/* const handleLikeClick = (userId) => {
  api
  .handleLikeClick(userId)
  .then()
} */

const generateCard = (config) => {
  const newCard = new Card(
    {
      config,
      cardTemplate,
      id,
      handleCardClick,
      handleDeleteClick,
      /* handleLikeClick */
    },

  );
  return newCard.generateCards();
}

const renderCard = new Section({
  renderer: (newCard) => {
    const newElement = generateCard(newCard);
    renderCard.addItem(newElement);
  },
}, cardsContainer);

const handleEditProfile = (inputValues) => {
  popupProfile.saving(true);
  const { userName, userStatus } = inputValues;

  api
    .editUserInfo(userName, userStatus)
    .then((data) => {
      userInfo.setUserInfo(data.userName, data.userStatus);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupProfile.saving(false);
    })
};

const popupProfile = new PopupWithForm(
  popupEdit,
  handleEditProfile
);

popupProfile.setEventListeners();

const handleEditAvatar = (data) => {
  popupEditAvatar.saving(true);
  api
    .changeAvatar(data)
    .then((data) => {
      avatarImg.src = data.avatarImg;
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditAvatar.saving(false);
    })
}

const popupEditAvatar = new PopupWithForm(
  popupAvatar,
  handleEditAvatar
);

popupEditAvatar.setEventListeners();

const handleCardAdd = (inputValues) => {
  const elementCard = generateCard({ title: inputValues['item-title'], image: inputValues['item-link'] });
  renderCard.addItem(elementCard);
  popupCardAdd.close();
};

const popupCardAdd = new PopupWithForm(
  popupAdd,
  handleCardAdd
);

popupCardAdd.setEventListeners();

const userInfo = new UserInfo({
  profileName,
  profileStatus,
  avatarImg
});

const handleEditProfileValue = () => {
  const { name, about } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;
  validationEditForm.resetValidation();

  popupProfile.open();
};

const validationEditForm = new FormValidator(validationConfig, '.popup__inputs_edit-item');
const validationAddForm = new FormValidator(validationConfig, '.popup__inputs_add-item');
const validationAvatar = new FormValidator(validationConfig, '.popup__input_avatar');

validationEditForm.enableValidation();
validationAddForm.enableValidation();
validationAvatar.enableValidation();

/* прослушиватель клика редактирования профиля */
popupOpenEditForm.addEventListener("click", handleEditProfileValue);

/* прослушиватель клика добавления карточки */
popupAddCard.addEventListener("click", function () {
  validationAddForm.resetValidation();
  validationAddForm.disableButton(popupAddCard);
  popupCardAdd.open();
});

popupSaveAvatar.addEventListener('click', function () {
  validationAvatar.resetValidation();
  popupAvatar.open();
})
