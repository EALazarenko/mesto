export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options._headers;
  }

  // проверка на ошибку
_getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

// создание карточки
addCard(config) {
  return fetch(`${this._baseUrl}/cards`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({
      title: config.title,
      image: config.image,
    }),
  }).then(this._getResponse)
}

// получение всех карточек
getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers
  })
    .then(res => this._getResponse(res));
}

//получение инфы о пользователе
getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers
  })
    .then(res => this._getResponse(res));
}

// Лайк
setLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    method: 'PUT',
    headers: this._headers
  })
    .then(res => this._getResponse(res));
}

// снятие лайка
deleteLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    method: 'DELETE',
    headers: this._headers
  })
    .then(res => this._getResponse(res));
}

// Удаление
deleteCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: this._headers
  })
    .then(res => this._getResponse(res));
}

//редактирование информации о пользователе
editUserInfo(config) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: config.userName,
      status: config.userStatus
    })
  })
    .then(res => this._getResponse(res));
}

// смена аватара
changeAvatar(config) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: config.avatar
    })
  })
    .then(res => this._getResponse(res));
}
}
