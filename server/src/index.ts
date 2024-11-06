//tsc --init para ejecutar , transforma su archivo a js cada vez que quiera guardar tsc en la consola , ademas nodemon index js para activar js en tiempo real y tsc --watch para el typescript

import Server from "./models/server";
import dotenv from 'dotenv';

//configuramos las variables de ambiente
dotenv.config()

const server= new Server();