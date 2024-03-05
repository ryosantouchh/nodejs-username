"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleImageBase64 = (imageBase64) => {
    if (!imageBase64)
        return null;
    const base64regexp = /^data:image\/[a-z]+;base64,/;
    const result = imageBase64.replace(base64regexp, '');
    return result;
};
exports.default = handleImageBase64;
