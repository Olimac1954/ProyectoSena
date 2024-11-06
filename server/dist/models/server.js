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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_1 = __importDefault(require("../routes/producto"));
const ventas_1 = __importDefault(require("../routes/ventas"));
const personal_1 = __importDefault(require("../routes/personal"));
const citas_1 = __importDefault(require("../routes/citas"));
const user_1 = __importDefault(require("../routes/user"));
const conecction_1 = __importDefault(require("../db/conecction"));
const user_2 = require("./user");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API working'
            });
        });
        this.app.use('/api/productos', producto_1.default);
        this.app.use('/api/personal', personal_1.default);
        this.app.use('/api/citas', citas_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/ventas', ventas_1.default);
    }
    midlewares() {
        //parseamos body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_2.User.sync();
                yield conecction_1.default.authenticate();
                console.log('base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('error al conectarse');
            }
        });
    }
}
exports.default = Server;
