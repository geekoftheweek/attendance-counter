<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>{{totalCount}} Total</v-toolbar-title>
      <v-btn flat dark @click.native='resetAll'>RESET ALL</v-btn>
      <v-modal v-model="showAdd">
       <v-btn flat dark slot="activator">NEW</v-btn>
       <v-card class="primary white--text">
         <v-card-text class="subheading white--text">
           <v-container fluid>
             <v-row>
               <v-col xs10>
                 <v-text-field dark label="Name" v-model="newCounterName"></v-text-field>
               </v-col>
             </v-row>
             <v-row>
               <v-col xs10>
                 <v-btn primary dark v-on:click.native="addCounter">Add</v-btn>
               </v-col>
             </v-row>
           </v-container>
         </v-card-text>
       </v-card>
      </v-modal>
    </v-toolbar>
    <main>
      <v-content>
        <v-container>
          <div>
            <Counter v-for="counter in counters" :key="counter.name" :name="counter.name"></Counter>
          </div>
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
