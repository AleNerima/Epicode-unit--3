import { iTags } from "./tags"

export interface iPost {
  id: number
  title: string
  body: string
  userId: number
  tags: iTags
  active: boolean
}
