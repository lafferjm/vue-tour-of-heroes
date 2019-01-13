const state = {
  messages: []
};

const actions = {
  addMessage({commit}, message) {
    commit('addMessage', message);
  },
  clearMessages({commit}) {
    commit('clearMessages');
  }
};

const mutations ={
  addMessage(state, message) {
    state.messages.push(message);
  },
  clearMessages() {
    state.messages = [];
  }
};

export default {
  state,
  actions,
  mutations
};
