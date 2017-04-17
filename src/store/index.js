import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counters: {}
  },

  actions: {
    LOAD_COUNTER_LIST: function({ commit }) {
      // fetch data
      var remoteData = {
        left: {
          name: 'left',
          current: 0,
          history: [1, 7, 4]
        },
        right: {
          name: 'right',
          current: 0,
          history: [6, 8]
        },
        center: {
          name: 'center',
          current: 0,
          history: [0, 2]
        }
      }
      commit('SET_COUNTER_LIST', { counters: remoteData })
    },
    ADD_COUNTER: function({ commit }, { counterName }) {
      commit('ADD_COUNTER', { counterName })
    },
    DELETE_COUNTER: function({ commit }, { counterName }) {
      commit('DELETE_COUNTER', { counterName })
    },
    INCREMENT_CURRENT: function({ commit }, { counterName }) {
      commit('INCREMENT_CURRENT', { counterName })
    },
    RESET_CURRENT: function({ commit }, { counterName }) {
      commit('RESET_CURRENT', { counterName })
    },
    RESET_ALL: function({ commit, state }) {
      state.counters.forEach(counterName => {
        commit('RESET_CURRENT', { counterName })
        commit('RESET_HISTORY', { counterName })
      })
    },
    SAVE_AND_RESET_CURRENT: function({ commit }, { counterName }) {
      commit('SAVE_AND_RESET_CURRENT', { counterName })
    }
  },

  mutations: {
    ADD_COUNTER: (state, { counterName }) => {
      Vue.set(state.counters, counterName, {
        name: counterName,
        current: 0,
        history: []
      })
    },
    REMOVE_COUNTER: (state, { counterName }) => {
      delete state.counters[counterName]
    },
    SET_COUNTER_LIST: (state, { counters }) => {
      state.counters = counters
    },
    INCREMENT_CURRENT: (state, { counterName }) => {
      state.counters[counterName].current++
    },
    RESET_CURRENT: (state, { counterName }) => {
      state.counters[counterName].current = 0
    },
    RESET_HISTORY: (state, { counterName }) => {
      state.counters[counterName].history = []
    },
    SAVE_AND_RESET_CURRENT: (state, { counterName }) => {
      state.counters[counterName].history.push(state.counters[counterName].current)
      state.counters[counterName].current = 0
    }
  },

  getters: {
    totalCount: state => {
      var sum = 0
      /*
      return sum + state.counters.reduce((acc, val) => {
        return acc + (state.counters[val].history.length ? (Math.max(...(state.counters[val].history))) : 0)
      }, 0)
      */
      return sum
    },
    json: state => {
      return JSON.stringify(state)
    }
  }
})
