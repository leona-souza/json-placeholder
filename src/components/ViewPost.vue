<script setup lang="ts">
import router from '@/router';
import { usePostStore } from '@/stores/posts'

const postId = router.currentRoute.value.params.id as string
const post = usePostStore()
post.getPost(postId)
</script>

<template>
    <h1>{{ post.post.title }}</h1>
    <article>{{ post.post.body }}</article>
    <a class="button__back" href="/posts">Back</a>
</template>

<style scoped>
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  article {
    font-size: 1rem;
  }

  .button__back {
    margin-top: 5rem;
    align-self: flex-start;

    &:hover {
      cursor: pointer;
    }
  }
</style>
