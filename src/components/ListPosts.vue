<script setup lang="ts">
import { usePostStore } from '@/stores/posts'

const post = usePostStore()
post.getPosts()
</script>

<template>
  Posts:
  <ul>
    <li v-for="item in post.posts" :key="item.id">
      <a :href="`/posts/${ item.id }`">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped>

</style>
