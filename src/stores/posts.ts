import { defineStore } from 'pinia'

// TYPES
import type { Post } from '@/types/posts'

// SERVICES
import { getPosts, getPost } from '@/services/posts'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [] as Post[],
    post: {} as Post
  }),
  getters: {},
  actions: {
    getPosts() {
      getPosts().then(res => this.posts = res)
    },
    getPost(id: string) {
      getPost(id).then(res => this.post = res)
    }
  }
})
