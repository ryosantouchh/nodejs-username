"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const _utils_1 = require("@utils");
const _helpers_1 = require("@helpers");
const createUser = async (req, res, next) => {
    try {
        const { birthDate, image } = req.body;
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
        await _entities_1.UserEntity.create({ data: newUserData });
        res.status(_types_1.StatusCodeEnum.CREATED).json({ message: 'create user success!' });
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
