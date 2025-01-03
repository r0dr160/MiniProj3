import { authService } from "@/api/auth.service.js"; // Certifique-se de que o caminho está correto
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_INFO,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  SET_MESSAGE
} from "./auth.constants";

import { STORAGE_ACCESS_TOKEN, STORAGE_USER_PROFILE } from "../constants";

// Estado inicial
const state = {
  message: "",
  token:
    localStorage.getItem(STORAGE_ACCESS_TOKEN) ||
    sessionStorage.getItem(STORAGE_ACCESS_TOKEN) ||
    "",
  profile: JSON.parse(
    localStorage.getItem(STORAGE_USER_PROFILE) ||
      sessionStorage.getItem(STORAGE_USER_PROFILE) ||
      "{}"
  )
};

// Getters
const getters = {
  isUserLoggedIn: state => !!state.token,
  getProfileName: state => state.profile.name || "Convidado",
  getUserType: state => state.profile.type || "Desconhecido",
  getProfile: state => state.profile,
  getMessage: state => state.message
};

// Ações
const actions = {
  [AUTH_LOGIN]: async ({ commit }, payload) => {
    try {
      const res = await authService.login(payload);
      commit(AUTH_LOGIN_SUCCESS, {
        token: res.token,
        profile: res.profile
      });
      commit(SET_MESSAGE, `Bem-vindo, ${res.profile.name}!`);
    } catch (err) {
      commit(SET_MESSAGE, "Erro ao realizar login.");
      throw err;
    }
  },

  [AUTH_REGISTER]: async ({ commit }, payload) => {
    try {
      const res = await authService.register(payload);
      commit(
        SET_MESSAGE,
        `O utilizador ${res.body.name} foi registrado com sucesso!`
      );
    } catch (err) {
      commit(SET_MESSAGE, "Erro ao registrar usuário.");
      throw err;
    }
  },

  [AUTH_INFO]: async ({ commit, state }) => {
    const token = state.token;
    if (!token) {
      commit(SET_MESSAGE, "Usuário não autenticado.");
      return;
    }
    try {
      const userInfo = await authService.getInfo(token);
      commit(
        SET_MESSAGE,
        `Informações do usuário carregadas: ${userInfo.name}`
      );
    } catch (err) {
      commit(SET_MESSAGE, "Erro ao obter informações do usuário.");
      throw err;
    }
  },

  [AUTH_LOGOUT]: ({ commit }) => {
    commit(AUTH_LOGOUT_SUCCESS);
    commit(SET_MESSAGE, "Você saiu com sucesso.");
  }
};

// Mutations
const mutations = {
  [AUTH_LOGIN_SUCCESS]: (state, data) => {
    state.token = data.token;
    localStorage.setItem(STORAGE_ACCESS_TOKEN, data.token);
    state.profile = data.profile;
    localStorage.setItem(STORAGE_USER_PROFILE, JSON.stringify(data.profile));
  },

  [AUTH_LOGOUT_SUCCESS]: state => {
    state.token = "";
    state.profile = {};
    localStorage.removeItem(STORAGE_ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_USER_PROFILE);
  },

  [AUTH_REGISTER_SUCCESS]: (state, data) => {
    state.register = data;
  },

  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
