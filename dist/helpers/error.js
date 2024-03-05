"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGenerator = void 0;
const ErrorGenerator = ({ message, statusCode, }) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};
exports.ErrorGenerator = ErrorGenerator;
