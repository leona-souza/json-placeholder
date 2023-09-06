import { defineStore } from 'pinia'

// TYPES
import type { Post } from '@/types/posts'

// SERVICES
import { getPosts, getPost, createPost } from '@/services/posts'

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
    },
    createPost({ title, body }: { title: string; body: string }) {
      createPost({
        userId: 1,
        title,
        body
      })
    },
    editPost({ id, title, body }: Partial<Post>) {
      createPost({
        userId: 1,
        title,
        body,
        id
      })
    },
  }
})
