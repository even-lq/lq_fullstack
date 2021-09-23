<template>
  <div class="home-page">
    <section class="py-3 py-sm-4 text-center container">
      <div class="row">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light text-secondary">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center mb-4">发现精彩</h4>
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store'
import ColumnList from '../components/column/ColumnList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>();
    onMounted(() => {
      store.dispatch('fetchColumns');
    })
    const list = computed(() => store.state.columns);
    return {
      list
    }
  }
})
</script>

<style>

</style>
