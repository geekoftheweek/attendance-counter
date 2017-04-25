<template>
  <div class="counter">
    <v-card class="ma-2">
      <v-card-row class="accent white--text">
        <v-card-title>
          <v-btn flat @click.native='deleteCounter' icon="icon" class="white--text">
            <v-icon>close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <span>{{ name }} - {{ counters[name].current }}</span>
        </v-card-title>
      </v-card-row>
      <v-card-row actions>
        <v-btn flat @click.native='reset'>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-card-text class="text-xs-center">{{ counters[name].history.length ? 'History: ' + counters[name].history.join(', ') : '' }}</v-card-text>
        <v-btn success large @click.native='done'>
          <v-icon>done</v-icon>
        </v-btn>
        <v-btn primary large @click.native='increment'>
          <v-icon class="display-1">plus_one</v-icon>
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
