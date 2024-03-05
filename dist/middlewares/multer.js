"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const _constants_1 = require("@constants");
exports.multerUpload = (0, multer_1.default)({
    limits: { fileSize: _constants_1.MULTER_FILE_SIZE.MB_10 },
});
