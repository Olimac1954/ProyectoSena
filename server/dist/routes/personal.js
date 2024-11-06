"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../controllers/personal");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, personal_1.getPersonals);
router.get('/:id', validate_token_1.default, personal_1.getPersonal);
router.delete('/:id', validate_token_1.default, personal_1.deletePersonal);
router.post('/', validate_token_1.default, personal_1.postPersonal);
router.put('/:id', validate_token_1.default, personal_1.updatePersonal);
exports.default = router;
