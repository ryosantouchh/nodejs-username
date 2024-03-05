import { z } from 'zod'
import { UserReqQuerySchema } from '@schemas'

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say',
}

export type ReqQueryUser = z.infer<typeof UserReqQuerySchema>
export type UserQueryObj = {
  where: Record<string, unknown>
  skip: number
  take: number
}
