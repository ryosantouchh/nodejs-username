import { Gender } from '@types'
import { z } from 'zod'

export const UserSchema = z.object({
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum([Gender.MALE, Gender.FEMALE, Gender.PREFER_NOT_TO_SAY]),
  birthDate: z.string().datetime(), // allow only ISO date string -- no need offset
  image: z.string(),
})

export const CreateUserReqSchema = z.object({
  body: UserSchema.omit({
    userId: true,
    birthDate: true,
    image: true,
  }),
})