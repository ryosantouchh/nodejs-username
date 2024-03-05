"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _controllers_1 = require("@controllers");
const _middlewares_1 = require("@middlewares");
const _schemas_1 = require("@schemas");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/');
router.get('/:userId');
router.post('/', (0, _middlewares_1.schemaValidator)(_schemas_1.CreateUserReqSchema), _controllers_1.createUser);
router.put('/:userId');
router.delete('/:userId');
exports.default = router;
