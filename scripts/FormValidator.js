export class FormValidator {
  constructor(configuration, formSelector) {
    this._inputSelector = configuration.inputSelector;
    this._submitButtonSelector = configuration.submitButtonSelector;
    this._inactiveButtonClass = configuration.inactiveButtonClass;
    this._inputErrorClass = configuration.inputErrorClass;
    this._errorClass = configuration.errorClass;

    this._formSelector = formSelector;

    this._formElement = document.querySelector(this._formSelector);

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _checkInputValidity = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
    } else {
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {

    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners();
  };
}





export const data = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__add-item_error',
  errorClass: 'popup__error_visible'
};
