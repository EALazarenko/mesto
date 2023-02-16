export class UserInfo {
  constructor({ profileName, profileStatus, avatarImg }) {
    this._userName = document.querySelector(profileName);
    this._userStatus = document.querySelector(profileStatus);
    this._avatar = document.querySelector(avatarImg);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      about: this._userStatus.textContent,
      avatar: this._avatar.src
    }

    return userInfo;
  }

  setUserInfo(name, status, avatar) {
    this._userName.textContent = name;
    this._userStatus.textContent = status;
    this._avatar.src = avatar;
  }
}
