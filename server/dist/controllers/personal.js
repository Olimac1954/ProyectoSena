"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersonal = exports.postPersonal = exports.deletePersonal = exports.getPersonal = exports.getPersonals = void 0;
const personal_1 = __importDefault(require("../models/personal"));
const getPersonals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonal = yield personal_1.default.findAll();
    res.json(listPersonal);
});
exports.getPersonals = getPersonals;
const getPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield personal_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `no existe un personal con el id ${id}`
        });
    }
});
exports.getPersonal = getPersonal;
const deletePersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield personal_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `no existe un personal con el id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: `El personal fue eliminado con exito!`
        });
    }
});
exports.deletePersonal = deletePersonal;
const postPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield personal_1.default.create(body);
    try {
        res.json({
            msg: `el personal fue agregado correctamente`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrio un error`
        });
    }
});
exports.postPersonal = postPersonal;
const updatePersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield personal_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: `personal fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `no existe un personal con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrio un error`
        });
    }
});
exports.updatePersonal = updatePersonal;
