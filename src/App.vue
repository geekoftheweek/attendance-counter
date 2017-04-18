<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Attendance Count: {{totalCount}}</v-toolbar-title>
      <v-btn primary dark @click.native='resetAll'>
        <v-icon>backspace</v-icon>
      </v-btn>
      <v-modal v-model="showAdd" bottom>
       <v-btn slot="activator" info>Add Counter</v-btn>
       <v-card class="secondary white--text">
         <v-card-text class="subheading white--text">
           <v-row>
             <v-col sm10 xs12>
               <v-text-field dark label="Name" v-model="newCounterName"></v-text-field>
             </v-col>
             <v-col sm2 xs12>
               <v-btn primary dark v-on:click.native="addCounter">Add</v-btn>
               <v-btn secondary dark v-on:click.native="cancelAdd">Cancel</v-btn>
             </v-col>
           </v-row>
         </v-card-text>
       </v-card>
      </v-modal>    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid="fluid">
          <v-row>
            <div>
            </div>
          </v-row>
          <Counter v-for="counter in counters" :key="counter.name" :name="counter.name"></Counter>
        </v-container>
      </v-content>
    </main>
  </v-app>
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
      this.newCounterName = ''
      this.showAdd = false;
    },
    cancelAdd() {
      this.newCounterName = ''
      this.showAdd = false
    }
  }

}
</script>

<style>
</style>
