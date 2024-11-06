"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
const Personal = conecction_1.default.define('Personal', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    nombre_cli: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_cli: {
        type: sequelize_1.DataTypes.STRING
    },
    correo_cli: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE
    },
    direccion_cli: {
        type: sequelize_1.DataTypes.STRING
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'personal',
    createdAt: false,
    updatedAt: false
});
exports.default = Personal;
