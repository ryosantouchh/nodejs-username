import { UserReqQuerySchema } from '@schemas'
import { ReqQueryUser, UserQueryObj } from '@types'

export const queryUser = (query: ReqQueryUser) => {
  const validatedReqQuery = UserReqQuerySchema.parse(query)

  const queryObj: UserQueryObj = {}

  queryObj.where = {}

  if (validatedReqQuery.search) {
    queryObj.where.OR = [
      {
        firstName: {
          contains: validatedReqQuery.search,
        },
      },
      {
        lastName: {
          contains: validatedReqQuery.search,
        },
      },
    ]
  }

  if (validatedReqQuery.page && validatedReqQuery.itemPerPage) {
    const page = parseInt(validatedReqQuery.page)
    const itemsPerPage = parseInt(validatedReqQuery.itemPerPage)
    const skip = (page - 1) * itemsPerPage
    queryObj.skip = skip
    queryObj.take = itemsPerPage
  }

  return queryObj
}
