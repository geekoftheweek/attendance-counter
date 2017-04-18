<template>
  <div id="app" class="text-xs-center">
    <div class="heading">
        <v-btn light flat @click.native='deleteCounter' icon="icon">
          <v-icon>delete_forever</v-icon>
        </v-btn>
        <span>{{name}}</span>
    </div>
    <div class="count">
      <div>{{ counters[name].current }} - {{ counters !== undefined ? counters[name].history : [] }}</div>
    </div>
    <div class="buttons">
      <v-btn flat @click.native='reset' icon="icon">
        <v-icon>backspace</v-icon>
      </v-btn>
      <v-btn flat @click.native='done' icon="icon">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn flat @click.native='increment' icon="icon">
        <v-icon>plus_one</v-icon>
      </v-btn>
    </div>
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
    },
    deleteCounter() {
      this.$store.dispatch('DELETE_COUNTER', { counterName: this.name })
    }
  },
  computed: mapState(['counters'])
}
</script>

<style>
.heading {
  font-size: 2em;
}
.count {
  font-size: 1.5em;
}
.buttons {
  font-size: 3em;
}
</style>
