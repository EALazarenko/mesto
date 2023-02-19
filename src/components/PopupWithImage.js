import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImageBtn = this._popup.querySelector('.popup__card-image');
    this._popupCardTitle = this._popup.querySelector('.popup__card-title');
  }

  open(name, link) {
    this._popupCardTitle.textContent = name;
    this._popupImageBtn.src = link;
    this._popupImageBtn.alt = name;

    super.open();
  }
}
