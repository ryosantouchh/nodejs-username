"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const _services_1 = require("@services");
const getUsers = async (req, res, next) => {
    try {
        const query = (0, _services_1.queryUser)(req.query);
        const users = await _entities_1.UserEntity.findMany(query);
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
