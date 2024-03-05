"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const _services_1 = require("@services");
const _utils_1 = require("@utils");
const updateUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { birthDate } = req.body;
        const id = parseInt(userId);
        const userById = await (0, _services_1.findUserById)(userId);
        const ISOBirthDate = birthDate ? (0, _utils_1.separateDateAndTime)(birthDate) : {};
        const newUserData = {
            ...userById,
            ...req.body,
            ...ISOBirthDate,
        };
        delete newUserData.createdAt;
        await _entities_1.UserEntity.update({
            where: {
                id,
            },
            data: newUserData,
        });
        res
            .status(_types_1.StatusCodeEnum.OK)
            .json({ message: 'update user data by id success!' });
    }
    catch (error) {
        next(error);
    }
};
exports.updateUserById = updateUserById;
