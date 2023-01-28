export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._btnClose = this._popup.querySelector('.popup__close');
    this._escClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._escClose);
    /* this.setEventListeners(); */
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._escClose);
  }

  setEventListeners() {
    this._btnClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    })
  }
}
