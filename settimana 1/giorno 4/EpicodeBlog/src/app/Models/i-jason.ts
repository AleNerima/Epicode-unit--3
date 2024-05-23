import { iPost } from "./iPosts"

export interface IJason {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
