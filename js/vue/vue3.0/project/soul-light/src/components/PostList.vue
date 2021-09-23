<template>
  <div class="post-list">
    <article v-for="post in list" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4 class="text-truncate"><router-link :to="`/posts/${post._id}/`">{{post.title}}</router-link></h4>
        <div class="row my-sm-3 align-items-center">
          <div v-if="post.image" class="post-image col-sm-4">
            <img :src="post.image.url" :alt="post.title" class="rounded-lg w-100 d-none d-sm-block">
            <img :src="post.image.url" :alt="post.title" height="120" class="rounded-lg w-100 d-block d-sm-none">
          </div>
          <p :class="{'col-sm-8': post.image}" class="post-content text-muted">{{post.excerpt}}</p>
        </div>
        <span class="text-muted">{{post.createdAt}}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { PostProps } from '../store';

export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  }
})
</script>

<style lang="less" scoped>
  @media screen and (max-width: 576px) {
    .post-content {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      margin-top: 1rem;
    }
    .post-image {
      padding-top: .5rem;
      img {
        object-fit: cover;
      }
    }
  }
  .post-list h4 a {
    text-decoration: none;
    color:#1a1a1a;
  }
  .post-list h4 a:hover {
    color:#0d6efd;
  }
</style>
