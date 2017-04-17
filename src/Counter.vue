<template>
  <div id="app">
    <p>{{ counters[name].current }} - {{ counters !== undefined ? counters[name].history : [] }}</p>
    <div>
      <button @click='increment'>Increment</button>
      <button @click='reset'>Reset</button>
    </div>
    <button @click='done'>Done</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Counter',
  props: ['name'],
  methods: {
    increment() {
      this.$store.dispatch('INCREMENT_CURRENT', { counterName: this.name })
    },
    reset() {
      this.$store.dispatch('RESET_CURRENT', { counterName: this.name })
    },
    done() {
      this.$store.dispatch('SAVE_AND_RESET_CURRENT', { counterName: this.name })
    }
  },
  computed: mapState(['counters'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
