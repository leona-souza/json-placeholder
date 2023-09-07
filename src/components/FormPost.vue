<script setup lang="ts">
import router from '@/router';
import { usePostStore } from '@/stores/posts'
import type { Post } from '@/types/posts'

const postId = router.currentRoute.value.params.id as string
const postStore = usePostStore()
postStore.getPost(postId)

const { createPost, editPost, deletePost } = postStore

// ACTIONS
const unmountComponent = () => {
  alert("Success!")
  postStore.post.title = ''
  postStore.post.body = ''
  window.location.href = '/posts'
}
const formAction = async (post: Partial<Post>, id: string) => {
  if (postId) {
    editPost(post, id).then(() => unmountComponent())
  } else {
    createPost(post).then(() => unmountComponent())
  }
}
const deleteAction = () => {
  if (confirm('Remove post?')) {
    deletePost(postId).then(() => unmountComponent())
  }
}
</script>

<template>
  <div class="wrapper">
    <input type="text" v-model="postStore.post.title" />
    <textarea
      v-model="postStore.post.body"
      rows="15"
    />
    <button
      @click="formAction({
        title: postStore.post.title,
        body: postStore.post.body
      }, postId)"
    >
      {{ postId ? 'Edit' : 'Create' }} post
    </button>
    <a
      v-if="postId"
      @click="deleteAction"
    >
      Delete post
    </a>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: inherit;
  }

  input {
    margin: 1rem 0;
    font-family: inherit;
  }

  textarea {
    font-family: inherit;
  }

  button {
    margin: 1rem auto 0;
    align-self: flex-start;
    font-family: inherit;
  }

  a {
    align-self: flex-start;

    &:hover {
      cursor: pointer;
    }
  }
</style>
