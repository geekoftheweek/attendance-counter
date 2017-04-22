<template>
  <div id="app">
    <v-card class="ma-4">
      <v-card-row class="accent white--text">
        <v-card-title>
          <span>{{name}}</span>
          <v-spacer></v-spacer>
          <v-btn flat @click.native='deleteCounter' icon="icon" class="white--text">
            <v-icon>delete_forever</v-icon>
          </v-btn>
        </v-card-title>
      </v-card-row>
      <v-card-text>
        <div class="display-2">
          <div>{{ counters[name].current }} - {{ counters !== undefined ? counters[name].history : [] }}</div>
        </div>
      </v-card-text>
      <v-card-row actions>
        <v-btn flat @click.native='reset'>
          <v-icon left>backspace</v-icon>RESET
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click.native='done'>
          <v-icon left>save</v-icon>SAVE
        </v-btn>
        <v-btn flat @click.native='increment'>
          <v-icon left>plus_one</v-icon>ADD
        </v-btn>
      </v-card-row>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Counter',
  props: ['name'],
  methods: {
    increment() {
      window.navigator.vibrate(50)
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
</style>
