"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("@constants");
const handleImageFormData = (imageFile) => {
    if (!imageFile)
        return;
    const base64image = imageFile.buffer.toString(_constants_1.FILE_FORMAT.BASE_64);
    return base64image;
};
exports.default = handleImageFormData;
