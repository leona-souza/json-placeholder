<script setup lang="ts">
import { usePostStore } from '@/stores/posts'

const postStore = usePostStore()
const { createPost, getPosts, post } = postStore
getPosts()

</script>

<template>
  <div class="wrapper">
    <h1>Posts</h1>
    <ul>
      <li v-for="item in postStore.posts" :key="item.id">
        <a :href="`/posts/${ item.id }`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  li {
    list-style: none;
    text-transform: capitalize;
  }
</style>
