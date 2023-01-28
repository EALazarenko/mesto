import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImageBtn = this._popup.querySelector('.popup__card-image');
    this._popupCardTitle = this._popup.querySelector('.popup__card-title');
  }

  open(title, image) {
    this._popupCardTitle.textContent = title;
    this._popupImageBtn.src = image;
    this._popupImageBtn.alt = title;

    super.open();
  }
}
