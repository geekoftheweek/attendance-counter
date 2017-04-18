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
      var value = localStorage.getItem('counters')

      if (value === null || value === '') {
        localStorage.setItem('counters', {})
        value = '{}'
      }

      var obj = JSON.parse(value)
      commit('SET_COUNTER_LIST', { counters: obj })
    },
    ADD_COUNTER: function({ commit }, { counterName }) {
      commit('ADD_COUNTER', { counterName })
      commit('PERSIST')
    },
    DELETE_COUNTER: function({ commit }, { counterName }) {
      commit('DELETE_COUNTER', { counterName })
      commit('PERSIST')
    },
    INCREMENT_CURRENT: function({ commit }, { counterName }) {
      commit('INCREMENT_CURRENT', { counterName })
      commit('PERSIST')
    },
    RESET_CURRENT: function({ commit }, { counterName }) {
      commit('RESET_CURRENT', { counterName })
      commit('PERSIST')
    },
    RESET_ALL: function({ commit, state }) {
      Object.keys(state.counters).forEach(counterName => {
        commit('RESET_CURRENT', { counterName })
        commit('RESET_HISTORY', { counterName })
      })
      commit('PERSIST')
    },
    SAVE_AND_RESET_CURRENT: function({ commit }, { counterName }) {
      commit('SAVE_AND_RESET_CURRENT', { counterName })
      commit('PERSIST')
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
    DELETE_COUNTER: (state, { counterName }) => {
      Vue.delete(state.counters, counterName)
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
    },
    PERSIST: (state) => {
      localStorage.setItem('counters', JSON.stringify(state.counters))
    }
  },

  getters: {
    totalCount: state => {
      var sum = 0
      return sum + Object.keys(state.counters).reduce((acc, val) => {
        return acc + (state.counters[val].history.length ? (Math.max(...(state.counters[val].history))) : 0)
      }, 0)
    },
    json: state => {
      return JSON.stringify(state)
    }
  }
})
