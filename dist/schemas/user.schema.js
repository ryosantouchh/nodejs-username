"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserReqSchema = exports.UserSchema = void 0;
const _types_1 = require("@types");
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    gender: zod_1.z.enum([_types_1.Gender.MALE, _types_1.Gender.FEMALE, _types_1.Gender.PREFER_NOT_TO_SAY]),
    birthDate: zod_1.z.string().datetime(), // allow only ISO date string -- no need offset
    image: zod_1.z.string(),
});
exports.CreateUserReqSchema = zod_1.z.object({
    body: exports.UserSchema.omit({
        userId: true,
        birthDate: true,
        image: true,
    }),
});