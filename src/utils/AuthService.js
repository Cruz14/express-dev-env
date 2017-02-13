import $ from 'jquery';
import jwtDecode from 'jwt-decode';

const config = __JWT__;

function login(params) {
  const request = $.ajax({
    type: 'POST',
    url: config.url,
    data: {
      client_id: config.client_id,
      connection: config.connection,
      scope: config.scope,
      device: config.device,
      username: params.username,
      password: params.password
    }
  });

  request.done(result => {
    if (result.id_token) {
      const decoded = jwtDecode(result.id_token);
      if (decoded.scopes.indexOf('dashboard:admin') !== -1) {
        this.setToken(result.id_token);
        this.redirectToHome();
      }
      else {
        alert('User is not allowed in technical dashboard');
      }

    }
  });

  request.fail(result => {
    if (result.status === 401) {
      alert(JSON.parse(result.responseText).error_description);
    }
  });
}

function loggedIn() {
  if (__DEV__ && !config.enabled) {
    return true;
  }
  return !!this.getToken();
}

function setToken(idToken) {
  localStorage.setItem('id_token', idToken);
}

function getToken() {
  return localStorage.getItem('id_token');
}

function removeToken() {
  localStorage.removeItem('id_token');
}

function logout() {
  localStorage.removeItem('id_token');
  this.redirectToLogin();
}

function redirectToHome() {
  window.location.href = `${this.mainRoute()}home`;
}

function redirectToLogin() {
  window.location.href = `${this.mainRoute()}login`;
}

function mainRoute() {
  if (__DEV__) {
    return '/';
  }
  return '/axon/dashboard/';
}

const auth0 = {
  mainRoute,
  loggedIn,
  login,
  setToken,
  getToken,
  removeToken,
  logout,
  redirectToHome,
  redirectToLogin
};

export default auth0;
