"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _entities_1 = require("@entities");
const findUserById = async (userId) => {
    try {
        const id = parseInt(userId);
        const userById = await _entities_1.UserEntity.findUnique({
            where: { id },
        });
        return userById;
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = findUserById;
