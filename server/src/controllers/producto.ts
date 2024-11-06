import{Request,Response}from 'express';
import Producto from '../models/producto';

export const getProducts= async(req:Request,res:Response)=>{
    const listProducts = await Producto.findAll()
    res.json(listProducts)

}

export const getProduct=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const product = await Producto.findByPk(id);
    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg: `no existe un producto con el id ${id}`
        })
    }

}
export const deleteProduct=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const product = await Producto.findByPk(id);
    if(!product){
            res.status(404).json({
                msg: `no existe un producto con el id ${id}`
            })
    }else{
            await product.destroy();
            res.json({
                msg:`El producto fue eliminado con exito!`
            })
    }
}
export const postProduct=async(req:Request,res:Response)=>{
    const{body}=req;    
    await Producto.create(body);
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
export const updateProduct=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const{body}=req;    
    try {
        const product =await Producto.findByPk(id);
        if(product){
           await product.update(body);
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