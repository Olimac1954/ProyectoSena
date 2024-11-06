import express,{Application,Request,Response} from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto';
import routesVentas from '../routes/ventas';
import routesPersonal from '../routes/personal';
import routesCitas from '../routes/citas';
import routesUser from '../routes/user';
import db from '../db/conecction';
import { User } from './user';

class  Server{
    private app:Application;
    private port:string;

    constructor(){
        
        this.app=express();
        this.port=process.env.PORT|| '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen(){
        this.app.listen(this.port, ()=>{//corre el server y muestra
            console.log(`aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/',(req: Request, res: Response) => {
            res.json({
                msg:'API working'
            })
        })
        this.app.use('/api/productos',routesProducto)
        this.app.use('/api/personal',routesPersonal)
        this.app.use('/api/citas',routesCitas)
        this.app.use('/api/users',routesUser)
        this.app.use('/api/ventas',routesVentas)
    }

    midlewares(){
        //parseamos body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }
    async dbConnect(){

        try {
            await User.sync()
            await db.authenticate()
            console.log('base de datos conectada')
            
        } catch (error) {
           console.log(error);
           console.log('error al conectarse'); 
        }
       
    }

}


export default Server;