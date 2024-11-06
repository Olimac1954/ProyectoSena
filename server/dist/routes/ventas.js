"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_1 = require("../controllers/ventas");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', ventas_1.getVentas);
router.get('/:id', ventas_1.getVenta);
router.delete('/:id', validate_token_1.default, ventas_1.deleteVentas);
router.post('/', ventas_1.postVentas);
router.put('/:id', ventas_1.updateVentas);
exports.default = router;
