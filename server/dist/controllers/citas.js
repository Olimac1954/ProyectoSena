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
exports.updateCitas = exports.postCitas = exports.deleteCitas = exports.getCita = exports.getCitas = void 0;
const citas_1 = __importDefault(require("../models/citas"));
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCitas = yield citas_1.default.findAll();
    res.json(listCitas);
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield citas_1.default.findByPk(id);
    if (cita) {
        res.json(cita);
    }
    else {
        res.status(404).json({
            msg: `no existe una cita  con el id ${id}`
        });
    }
});
exports.getCita = getCita;
const deleteCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield citas_1.default.findByPk(id);
    if (!cita) {
        res.status(404).json({
            msg: `no existe una cita con el id ${id}`
        });
    }
    else {
        yield cita.destroy();
        res.json({
            msg: `La cita fue eliminado con exito!`
        });
    }
});
exports.deleteCitas = deleteCitas;
const postCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield citas_1.default.create(body);
    try {
        res.json({
            msg: `la cita fue agregada correctamente`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrio un error`
        });
    }
});
exports.postCitas = postCitas;
const updateCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cita = yield citas_1.default.findByPk(id);
        if (cita) {
            yield cita.update(body);
            res.json({
                msg: `La cita fue actualizada con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `no existe una cita con el id ${id}`
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
exports.updateCitas = updateCitas;
