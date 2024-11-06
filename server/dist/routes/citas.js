"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citas_1 = require("../controllers/citas");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, citas_1.getCitas);
router.get('/:id', citas_1.getCita);
router.delete('/:id', validate_token_1.default, citas_1.deleteCitas);
router.post('/', citas_1.postCitas);
router.put('/:id', citas_1.updateCitas);
exports.default = router;
