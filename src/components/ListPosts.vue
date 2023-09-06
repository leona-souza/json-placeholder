<script setup lang="ts">
import { usePostStore } from '@/stores/posts'

const postStore = usePostStore()
const { createPost, getPosts, post } = postStore
getPosts()

</script>

<template>
  Posts:
  <ul>
    <li v-for="item in postStore.posts" :key="item.id">
      <a :href="`/posts/${ item.id }`">{{ item.title }}</a>
    </li>
  </ul>
  <input type="text" v-model="post.title">
  <input type="text" v-model="post.body">
  <button @click="createPost({
    title: post.title,
    body: post.body
  })" >criar post</button>
</template>

<style scoped>

</style>
