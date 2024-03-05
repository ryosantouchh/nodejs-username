"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const _types_1 = require("@types");
const _services_1 = require("@services");
const _helpers_1 = require("@helpers");
const getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const userById = await (0, _services_1.findUserById)(userId);
        if (!userById) {
            throw (0, _helpers_1.errorGenerator)({
                statusCode: 404,
                message: 'user not found!',
            });
        }
        res.status(_types_1.StatusCodeEnum.OK).json({ data: userById, message: 'get user!' });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserById = getUserById;
