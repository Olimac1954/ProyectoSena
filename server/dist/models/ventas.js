"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
const Venta = conecction_1.default.define('Venta', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    nombreU: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.NUMBER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    tableName: 'ventas',
    createdAt: false,
    updatedAt: false
});
exports.default = Venta;
