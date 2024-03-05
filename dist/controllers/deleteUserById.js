"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const library_1 = require("@prisma/client/runtime/library");
const deleteUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const id = parseInt(userId);
        await _entities_1.UserEntity.delete({
            where: {
                id,
            },
        });
        res
            .status(_types_1.StatusCodeEnum.OK)
            .json({ message: 'delete user data by id success!' });
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                const newError = {
                    statusCode: 404,
                    message: 'user to delete does not exit',
                };
                next(newError);
            }
        }
    }
};
exports.deleteUserById = deleteUserById;
