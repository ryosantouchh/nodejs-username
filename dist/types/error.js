"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodeEnum = void 0;
var StatusCodeEnum;
(function (StatusCodeEnum) {
    StatusCodeEnum[StatusCodeEnum["OK"] = 200] = "OK";
    StatusCodeEnum[StatusCodeEnum["CREATED"] = 201] = "CREATED";
    StatusCodeEnum[StatusCodeEnum["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCodeEnum[StatusCodeEnum["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCodeEnum[StatusCodeEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodeEnum[StatusCodeEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodeEnum[StatusCodeEnum["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodeEnum[StatusCodeEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodeEnum[StatusCodeEnum["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    StatusCodeEnum[StatusCodeEnum["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    StatusCodeEnum[StatusCodeEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCodeEnum[StatusCodeEnum["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
})(StatusCodeEnum || (exports.StatusCodeEnum = StatusCodeEnum = {}));
