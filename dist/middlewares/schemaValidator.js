"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const schemaValidator = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(400).json({
                message: 'Validation Error -- Bad Request',
                errors: err.errors,
            });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.default = schemaValidator;
