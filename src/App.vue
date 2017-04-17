<template>
  <div id="app">
    <div>
      <p>json is: {{json}}</p>
      <p>totalCount is: {{totalCount}}</p>
      <button @click='resetAll'>Start Over</button>
      <Counter v-for="counter in counters" :name="counter.name" :init-count="counter.current" :init-history="counter.history" :key="counter.name"></Counter>
    </div>
    <div>
      <input type="text" placeholder="Name" v-model="newCounterName">
      <button @click='addCounter'>Add</button>
    </div>
  </div>
</template>

<script>
import Counter from './Counter.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      newCounterName: ''
    }
  },
  components: {
    Counter
  },
  mounted: function() {
    this.$store.dispatch('LOAD_COUNTER_LIST')
  },
  computed: Object.assign(
    {},
    mapState(['counters']),
    mapGetters(['totalCount', 'json'])
  ),
  methods: {
    resetAll() {
      this.$store.dispatch('RESET_ALL')
    },
    addCounter() {
      this.$store.dispatch('ADD_COUNTER', { counterName: this.newCounterName })
    }
  }

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
