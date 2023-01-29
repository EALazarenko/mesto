import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import {
  validationConfig,
  initialCards,
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
  popupCard
} from "../utils/constants.js";

const handleOpenImage = new PopupWithImage(popupCard);
handleOpenImage.setEventListeners();

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

const handleEditProfile = (inputValues) => {
  const { userName, userStatus } = inputValues;
  userInfo.setUserInfo(userName, userStatus);
  popupProfile.close();
};

const popupProfile = new PopupWithForm(
  popupEdit,
  handleEditProfile
);

popupProfile.setEventListeners();

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
});

const handleEditProfileValue = () => {
  const { username, job } = userInfo.getUserInfo();

  nameInput.value = username;
  jobInput.value = job;
  validationEditForm.resetValidation();

  popupProfile.open();
};

const validationEditForm = new FormValidator(validationConfig, '.popup__inputs_edit-item');
const validationAddForm = new FormValidator(validationConfig, '.popup__inputs_add-item');

validationEditForm.enableValidation();
validationAddForm.enableValidation();

/* прослушиватель клика редактирования профиля */
popupOpenEditForm.addEventListener("click", handleEditProfileValue);

/* прослушиватель клика добавления формы */
popupAddCard.addEventListener("click", function () {
  validationAddForm.resetValidation();
  validationAddForm.disableButton(popupAddCard);
  popupCardAdd.open();
});
