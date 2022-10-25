"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_router_1 = __importDefault(require("./routes/persona.router"));
const Producto_router_1 = __importDefault(require("./routes/Producto.router"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/producto', Producto_router_1.default);
app.use('/api/persona', persona_router_1.default);
app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`);
});
