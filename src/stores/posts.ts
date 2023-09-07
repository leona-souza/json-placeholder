import { defineStore } from 'pinia'

// TYPES
import type { Post } from '@/types/posts'

// SERVICES
import {
  getPosts,
  getPost,
  createPost,
  editPost,
  deletePost
} from '@/services/posts'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [] as Post[],
    post: {} as Post
  }),
  actions: {
    getPosts() {
      getPosts().then(res => this.posts = res)
    },
    async getPost(id: string): Promise<void> {
      getPost(id).then(res => this.post = res)
    },
    async createPost({ title, body }: Partial<Post>): Promise<void> {
      await createPost({
        userId: 1,
        title,
        body
      })
    },
    async editPost(post: Partial<Post>, postId: string): Promise<void> {
      await editPost(post, postId)
    },
    async deletePost(postId: string): Promise<void> {
      await deletePost(postId)
    }
  }
})
