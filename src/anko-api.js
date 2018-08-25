import axios from 'axios';

/* Authentication */

export function signup(params) {
  return axios.post('localhost:9292/auth', params);
}

export function login(user) {
  return axios.post('localhost:9292/auth/sign_in', user);
}

export function logout() {
  return axios.delete('localhost:9292/auth/sign_out');
}

