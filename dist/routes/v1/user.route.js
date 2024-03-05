"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _schemas_1 = require("@schemas");
const _middlewares_1 = require("@middlewares");
const _controllers_1 = require("@controllers");
const router = express_1.default.Router();
router.get('/', _controllers_1.getUsers);
router.get('/:userId', _controllers_1.getUserById);
router.post('/', _middlewares_1.multerUpload.single('image'), (0, _middlewares_1.schemaValidator)(_schemas_1.CreateUserReqSchema), _controllers_1.createUser);
router.put('/:userId', (0, _middlewares_1.schemaValidator)(_schemas_1.UpdateUserReqSchema), _controllers_1.updateUserById);
router.delete('/:userId', _controllers_1.deleteUserById);
exports.default = router;
