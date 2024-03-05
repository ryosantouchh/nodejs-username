"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorGenerator = void 0;
const errorGenerator = ({ message, statusCode, }) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};
exports.errorGenerator = errorGenerator;
