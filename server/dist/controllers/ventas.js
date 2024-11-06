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
exports.updateVentas = exports.postVentas = exports.deleteVentas = exports.getVenta = exports.getVentas = void 0;
const ventas_1 = __importDefault(require("../models/ventas"));
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listventas = yield ventas_1.default.findAll();
    res.json(listventas);
});
exports.getVentas = getVentas;
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ventas = yield ventas_1.default.findByPk(id);
    if (ventas) {
        res.json(ventas);
    }
    else {
        res.status(404).json({
            msg: `no existe un ventas con el id ${id}`
        });
    }
});
exports.getVenta = getVenta;
const deleteVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ventas = yield ventas_1.default.findByPk(id);
    if (!ventas) {
        res.status(404).json({
            msg: `no existe un ventas con el id ${id}`
        });
    }
    else {
        yield ventas.destroy();
        res.json({
            msg: `El ventaso fue eliminado con exito!`
        });
    }
});
exports.deleteVentas = deleteVentas;
const postVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield ventas_1.default.create(body);
    try {
        res.json({
            msg: `el producto fue agregado correctamente`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrio un error`
        });
    }
});
exports.postVentas = postVentas;
const updateVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ventas = yield ventas_1.default.findByPk(id);
        if (ventas) {
            yield ventas.update(body);
            res.json({
                msg: `producto fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `no existe un producto con el id ${id}`
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
exports.updateVentas = updateVentas;
