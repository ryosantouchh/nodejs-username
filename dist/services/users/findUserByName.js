"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _entities_1 = require("@entities");
const findUserByName = async (nameSurname) => {
    try {
        const userByName = await _entities_1.UserEntity.findMany({
            where: {
                OR: [
                    {
                        firstName: {
                            contains: nameSurname,
                        },
                    },
                    {
                        lastName: {
                            contains: nameSurname,
                        },
                    },
                ],
            },
        });
        return userByName;
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = findUserByName;
