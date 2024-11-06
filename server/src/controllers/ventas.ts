import{Request,Response}from 'express';
import Venta from '../models/ventas';

export const getVentas= async(req:Request,res:Response)=>{
    const listventas = await Venta.findAll()
    res.json(listventas)

}

export const getVenta=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const ventas = await Venta.findByPk(id);
    if(ventas){
        res.json(ventas)
    }else{
        res.status(404).json({
            msg: `no existe un ventas con el id ${id}`
        })
    }

}
export const deleteVentas=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const ventas = await Venta.findByPk(id);
    if(!ventas){
            res.status(404).json({
                msg: `no existe un ventas con el id ${id}`
            })
    }else{
            await ventas.destroy();
            res.json({
                msg:`El ventaso fue eliminado con exito!`
            })
    }
}
export const postVentas=async(req:Request,res:Response)=>{
    const{body}=req;    
    await Venta.create(body);
    try {
        res.json({
            msg:`el producto fue agregado correctamente`
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
   
}
export const updateVentas=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const{body}=req;    
    try {
        const ventas =await Venta.findByPk(id);
        if(ventas){
           await ventas.update(body);
            res.json({
            msg:`producto fue actualizado con exito`
           })
        }else{
            res.status(404).json({
                msg: `no existe un producto con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
  
}