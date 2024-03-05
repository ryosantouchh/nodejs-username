"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUser = void 0;
const _schemas_1 = require("@schemas");
const queryUser = (query) => {
    const validatedReqQuery = _schemas_1.UserReqQuerySchema.parse(query);
    const queryObj = {};
    queryObj.where = {};
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
        ];
    }
    if (validatedReqQuery.page && validatedReqQuery.itemPerPage) {
        const page = parseInt(validatedReqQuery.page);
        const itemsPerPage = parseInt(validatedReqQuery.itemPerPage);
        const skip = (page - 1) * itemsPerPage;
        queryObj.skip = skip;
        queryObj.take = itemsPerPage;
    }
    return queryObj;
};
exports.queryUser = queryUser;
