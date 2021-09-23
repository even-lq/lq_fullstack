<template>
  <div class="column-card row mobile">
    <div v-for="column in columnList" :key="column._id" class="col-12 col-sm-3 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.fitUrl" class="card-img d-none d-sm-inline-block rounded-circle border border-light my-3" :alt="column.title">
          <h5 class="card-title d-none d-sm-block text-truncate">{{ column.title }}</h5>
          <!-- 移动端 -->
          <div class="d-sm-none hstack my-2">
            <img :src="column.avatar && column.avatar.fitUrl" width="32" height="32" class="rounded-circle border border-light" :alt="column.title">
            <div class="p-2 text-truncate">{{ column.title }}</div>
          </div>
          <p class="column-card-des card-text text-start">{{ column.description }}</p>
          <!-- :to="{
              name: 'column',
              params: {
                id: column.id
              }
            }" -->
          <router-link
            :to="`/column/${column._id}`"
            class="btn btn-outline-primary mb-2 mb-sm-3">进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { ColumnProps } from '@/store';
import { generateFitUrl } from '@/helper';

export default defineComponent({
  name: 'CoLumnList',
  props: {
    list: {

      // Array是数组的构造函数，不是类型，不可以断言
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed<ColumnProps[]>(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = { fitUrl: require('@/assets/column.jpg') }
        } else {
          generateFitUrl(column.avatar, 86, 86);
        }
        return column;
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style lang="less" scoped>
  @media screen and (max-width: 576px) {
    .mobile {
      .card-title {
        text-align: left;
      }
    }
  }
  .column-card {
    .card-img {
      width: 5.375rem;
      height: 5.375rem;
    }
    .card-title {
      font-weight: 700;
    }
    .card-text  {
      line-height: 1.25rem;
      height: 3.75rem;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &-des {
      max-height: 100px;
      color: rgba(33, 37, 41, .92);
    }
  }
</style>
