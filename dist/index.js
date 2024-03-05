"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const _utils_1 = require("@utils");
const _constants_1 = require("@constants");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.NODE_SERVER_PORT || '8080';
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json({ limit: _constants_1.PAYLOAD_SIZE.MB_10 }));
app.use('/', routes_1.default);
app.use('/', _utils_1.errorHandler);
app.listen(port, () => {
    console.log('server running at port 8080');
});
