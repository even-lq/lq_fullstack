<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row col-border pb-4 align-items-center" v-if="column">
      <div class="column-avatar col-sm-2 text-center">
        <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border">
      </div>
      <div class="mobile-col-border col-sm-9">
        <h4 class="text-truncate">{{column.title}}</h4>
        <p class="column-des text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store'
import PostList from '@/components/PostList.vue';

export default defineComponent({
  components: { PostList },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const currentId = route.params.id;
    onMounted(() => {
      store.dispatch('fetchColumn', currentId);
      store.dispatch('fetchPosts', currentId);
    })
    const column = computed(() => store.getters.getColumnByCid(currentId));
    const list = computed(() => store.getters.getPostsByCid(currentId));
    return {
      column,
      list
    }
  }
})
</script>

<style lang="less" scoped>
  @media screen and (max-width: 576px) {
    .column-avatar {
      padding-bottom: 1rem;
      img {
        width: 25%;
      }
    }
    .column-des {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .mobile-col-border::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #dee2e6;
    }
  }
  @media screen and (min-width: 576px) {
    .col-border::after {
      content: '';
      display: block;
      margin-top: 1.5rem;
      width: 100%;
      height: 1px;
      margin-right: calc(var(--bs-gutter-x) * .5);
      margin-left: calc(var(--bs-gutter-x) * .5);
      background: #dee2e6;
    }
  }
</style>
