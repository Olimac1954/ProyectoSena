import{Request,Response}from 'express';
import Citas from '../models/citas';

export const getCitas= async(req:Request,res:Response)=>{
    const listCitas = await Citas.findAll()
    res.json(listCitas)
}

export const getCita=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const cita = await Citas.findByPk(id);
    if(cita){
        res.json(cita)
    }else{
        res.status(404).json({
            msg: `no existe una cita  con el id ${id}`
        })
    }

}
export const deleteCitas=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const cita = await Citas.findByPk(id);
    if(!cita){
            res.status(404).json({
                msg: `no existe una cita con el id ${id}`
            })
    }else{
            await cita.destroy();
            res.json({
                msg:`La cita fue eliminado con exito!`
            })
    }
}
export const postCitas=async(req:Request,res:Response)=>{
    const{body}=req;    
    await Citas.create(body);
    try {
        res.json({
            msg:`la cita fue agregada correctamente`
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
   
}
export const updateCitas=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const{body}=req;    
    try {
        const cita =await Citas.findByPk(id);
        if(cita){
           await cita.update(body);
            res.json({
            msg:`La cita fue actualizada con exito`
           })
        }else{
            res.status(404).json({
                msg: `no existe una cita con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error)
        res.json({
            msg: `ocurrio un error`
        })
        
    }
  
}