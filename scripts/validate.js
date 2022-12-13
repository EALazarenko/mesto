enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__add-item_error',
  errorClass: 'popup__error_visible'
});

const checkInputValidity = (inputElement, errorClass, inputErrorClass) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  if (inputElement.validity.valid) {
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass);
  } else {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, inactiveButtonClass, buttonElement) {

  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

function enableValidation(validationConfig) {
  const { formSelector, inputSelector, submitButtonSelector, errorClass, inactiveButtonClass, inputErrorClass } = validationConfig;

  const formList = Array.from(document.querySelectorAll(formSelector));


  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach(inputElement => {

      inputElement.addEventListener('input', e => {
        checkInputValidity(inputElement, errorClass, inputErrorClass);
        toggleButtonState(inputList, inactiveButtonClass, buttonElement);
      })
    })

  });
};
