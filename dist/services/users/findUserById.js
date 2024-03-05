"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _types_1 = require("@types");
const _entities_1 = require("@entities");
const _helpers_1 = require("@helpers");
const findUserById = async (userId) => {
    try {
        const id = parseInt(userId);
        const userById = await _entities_1.UserEntity.findUnique({
            where: { id },
        });
        return userById;
    }
    catch (error) {
        throw (0, _helpers_1.errorGenerator)({
            statusCode: _types_1.StatusCodeEnum.NOT_FOUND,
            message: 'user not found!',
        });
    }
};
exports.default = findUserById;
