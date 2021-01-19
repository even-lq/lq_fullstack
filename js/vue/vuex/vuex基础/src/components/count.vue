<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{newCount}}</h2>
    <button @click="addAction">add</button>
    <button @click="add(10)">add</button>
    <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }
  // }
  
  // computed: {
  //   ...mapState(["count"]),
  // },

  // computed: mapState(["count"]),

  data() {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count * 3
  // }),
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["newCount"]),
  },
  // methods: mapMutations(['add', 'reduce'])
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
  // mounted() {
  //   this.msg = mapState(["count"])
  // },

  
}
</script>

<style>

</style>