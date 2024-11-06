import{Request,Response}from 'express';
import Personal from '../models/personal';

export const getPersonals= async(req:Request,res:Response)=>{
    const listPersonal = await Personal.findAll()
    res.json(listPersonal)
}

export const getPersonal=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const product = await Personal.findByPk(id);
    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg: `no existe un personal con el id ${id}`
        })
    }

}
export const deletePersonal=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const product = await Personal.findByPk(id);
    if(!product){
            res.status(404).json({
                msg: `no existe un personal con el id ${id}`
            })
    }else{
            await product.destroy();
            res.json({
                msg:`El personal fue eliminado con exito!`
            })
    }
}
export const postPersonal=async(req:Request,res:Response)=>{
    const{body}=req;    
    await Personal.create(body);
    try {
        res.json({
            msg:`el personal fue agregado correctamente`
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
   
}

export const updatePersonal=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const{body}=req;    
    try {
        const product =await Personal.findByPk(id);
        if(product){
           await product.update(body);
            res.json({
            msg:`personal fue actualizado con exito`
           })
        }else{
            res.status(404).json({
                msg: `no existe un personal con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
  
}