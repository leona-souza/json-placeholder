<script setup lang="ts">
import FormPost from '../components/FormPost.vue'
</script>

<template>
  <section>
    <FormPost />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 15rem;

    @media (max-width: 1300px) {
      padding: 0 2rem;
    }
  }
</style>
