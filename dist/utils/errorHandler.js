"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, _, res, _next) => {
    const errorObj = { message: error.message, statusCode: 500 };
    if (error.statusCode) {
        errorObj.statusCode = error.statusCode;
    }
    res.status(errorObj.statusCode).send(errorObj);
};
exports.default = errorHandler;
