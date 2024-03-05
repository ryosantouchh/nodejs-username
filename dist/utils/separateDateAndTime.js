"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const separateDateAndTime = (ISODateString) => {
    const rawDateString = ISODateString.split('T')[0];
    const ISODateWithoutTime = new Date(rawDateString).toISOString;
    return ISODateWithoutTime;
};
exports.default = separateDateAndTime;
