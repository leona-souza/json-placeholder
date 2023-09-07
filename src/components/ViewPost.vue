<script setup lang="ts">
import router from '@/router';
import { usePostStore } from '@/stores/posts'

const postId = router.currentRoute.value.params.id as string
const post = usePostStore()
post.getPost(postId)
</script>

<template>
  <div class="wrapper">
    <h1>{{ post.post.title }}</h1>
    <article>{{ post.post.body }}</article>
    <div class="buttons">
      <a class="button__back" href="/posts">Back</a>
      <a class="button__back" :href="`/post/form/${postId}`">Edit</a>
    </div>
  </div>
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

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5rem;
  }

  .button__back {
    align-self: flex-start;

    &:hover {
      cursor: pointer;
    }
  }
</style>
