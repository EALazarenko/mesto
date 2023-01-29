export class UserInfo {
  constructor({ profileName, profileStatus }) {
    this._userName = document.querySelector(profileName);
    this._userStatus = document.querySelector(profileStatus);
  }

  getUserInfo() {
    const userInfo = {
      username: this._userName.textContent,
      job: this._userStatus.textContent
    }

    return userInfo;
  }

  setUserInfo(name, status) {
    this._userName.textContent = name;
    this._userStatus.textContent = status;
  }
}
