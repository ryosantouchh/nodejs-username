"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const getUsers = async (_req, res, next) => {
    try {
        const users = await _entities_1.UserEntity.findMany();
        const userCount = users.length;
        const getUserResponse = {
            count: userCount,
            users,
        };
        res
            .status(_types_1.StatusCodeEnum.OK)
            .json({ data: getUserResponse, message: 'get all users!' });
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
