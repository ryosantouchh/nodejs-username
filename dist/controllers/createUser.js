"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _types_1 = require("@types");
const libs_1 = require("src/libs");
const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        await libs_1.prisma.user.create({ data });
        res.status(_types_1.StatusCodeEnum.CREATED).json({ message: 'create user success!' });
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
