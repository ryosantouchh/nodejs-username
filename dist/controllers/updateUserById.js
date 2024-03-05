"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const _services_1 = require("@services");
const _utils_1 = require("@utils");
const _helpers_1 = require("@helpers");
const updateUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { birthDate, image } = req.body;
        const id = parseInt(userId);
        const oldUserData = await (0, _services_1.findUserById)(userId);
        if (!oldUserData) {
            throw (0, _helpers_1.errorGenerator)({
                statusCode: 404,
                message: 'user not found!',
            });
        }
        const ISOBirthDate = birthDate ? (0, _utils_1.separateDateAndTime)(birthDate) : {};
        // handle either base64 or image file
        const imageFile = req.file
            ? (0, _helpers_1.handleImageFormData)(req.file)
            : (0, _helpers_1.handleImageBase64)(image);
        const newUserData = {
            ...req.body,
            ...ISOBirthDate,
            ...{ image: imageFile },
        };
        const updatedUserData = {
            ...oldUserData,
            ...newUserData,
        };
        delete updatedUserData.createdAt;
        await _entities_1.UserEntity.update({
            where: {
                id,
            },
            data: updatedUserData,
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
