// TYPES
import type { Post } from '@/types/posts'

// SERVICES
import { api } from '@/services/api'

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/posts')
  return response.data
}

export const getPost = async (id: string): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}
