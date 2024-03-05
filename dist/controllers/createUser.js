"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _entities_1 = require("@entities");
const _types_1 = require("@types");
const _utils_1 = require("@utils");
const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const { birthDate } = data;
        const ISOBirthDate = birthDate ? (0, _utils_1.separateDateAndTime)(birthDate) : {};
        if (req.file) {
            const base64image = req.file.buffer.toString('base64');
            data.image = base64image;
        }
        console.log(data);
        await _entities_1.UserEntity.create({ data, ...ISOBirthDate });
        res.status(_types_1.StatusCodeEnum.CREATED).json({ message: 'create user success!' });
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
