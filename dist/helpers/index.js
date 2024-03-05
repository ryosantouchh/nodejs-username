"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleImageBase64 = exports.handleImageFormData = void 0;
__exportStar(require("./error"), exports);
var handleImageFormData_1 = require("../helpers/handleImageFormData");
Object.defineProperty(exports, "handleImageFormData", { enumerable: true, get: function () { return __importDefault(handleImageFormData_1).default; } });
var handleImageBase64_1 = require("../helpers/handleImageBase64");
Object.defineProperty(exports, "handleImageBase64", { enumerable: true, get: function () { return __importDefault(handleImageBase64_1).default; } });
